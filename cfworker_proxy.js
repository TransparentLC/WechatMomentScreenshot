addEventListener('fetch', event => event.respondWith(handleRequest(event.request)));

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    const result = {
        success: false,
        title: '',
        cover: '',
        author: '',
    };
    const origin = request.headers.get('origin') || '';
    const responseConfig = {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    if (origin && (origin.startsWith('https://') || origin.startsWith('http://'))) {
        responseConfig.headers['Access-Control-Allow-Origin'] = origin;
    }

    const articleURL = new URL(request.url).searchParams.get('url');

    try {
        if (!articleURL || !articleURL.startsWith('https://mp.weixin.qq.com')) throw new Error('Invalid URL');

        const articleContent = await fetch(articleURL).then(r => r.text());

        let match = articleContent.match(
            /var nickname = htmlDecode\("(?<author>[\S\s]*?)"\);[\S\s]*?var msg_title = \'(?<title>[\S\s]*?)\'.html\(false\);[\S\s]*?var msg_cdn_url = "(?<cover>[\S\s]*?)";/
        );
        if (!match) {
            // Test case:
            // https://mp.weixin.qq.com/s/_F1sw9yrzMfpARzvHaG_MA
            // https://mp.weixin.qq.com/s/HpfdeLrEkXwlEzSP2yzN1A
            match = articleContent.match(
                /d\.title = xml \? getXmlValue\('title\.DATA'\) : '(?<title>.*?)';[\S\s]*?d\.nick_name = xml \? getXmlValue\('nick_name\.DATA'\) : '(?<author>.*?)';[\S\s]*?d\.cdn_1_1_img = xml \? getXmlValue\('cdn_url_1_1\.DATA'\) : '(?<cover>.*?)';/
            );
        }
        if (!match) throw new Error('Unable to match content');

        result.title = match.groups.title;
        result.author = match.groups.author;

        for (const [k, v] of Object.entries({
            '&#96;': '`',
            '&#39;': '\'',
            '&quot;': '"',
            '&nbsp;': ' ',
            '&gt;': '>',
            '&lt;': '<',
            '&yen;': '¥',
            '&amp;': '&',
        })) {
            result.title = result.title.replace(new RegExp(k, 'g'), v);
            result.author = result.author.replace(new RegExp(k, 'g'), v);
        }

        const u = new URL('https://images.weserv.nl/');
        for (const [k, v] of Object.entries({
            url: match.groups.cover,
            il: '',
            we: '',
            h: 360,
            q: 70,
            encoding: 'base64',
        })) u.searchParams.set(k, v.toString());
        result.cover = await fetch(u.toString()).then(r => r.text());
        result.success = true;

        console.log(articleURL);
    } catch (error) {
        console.log(error);
    }

    return new Response(JSON.stringify(result), responseConfig);
}