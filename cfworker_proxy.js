addEventListener('fetch', event => {
    let response = handleRequest(event.request);
    const origin = event.request.headers.get('Origin');
    if ([
        'http://localhost',
        'https://akarin.dev',
        'https://transparentlc.github.io',
        // Add other mirrors
    ].includes(origin)) {
        response = response.then(e => {
            e.headers.set('Access-Control-Allow-Origin', origin);
            return e;
        });
    }
    event.respondWith(response);
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    const result = {
        success: false,
        title: '',
        cover: '',
    };
    const responseConfig = {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const articleURL = new URL(request.url).searchParams.get('url');

    try {
        if (!articleURL || !articleURL.startsWith('https://mp.weixin.qq.com')) throw new Error('Invalid URL');

        const articleContent = await fetch(articleURL).then(res => res.text());

        const match = articleContent.match(
            /var msg_title = \'(?<title>[\S\s]*?)\'.html\(false\);[\S\s]*?var msg_cdn_url = "(?<cover>[\S\s]*?)";/
        );
        if (!match) throw new Error('Unable to match content');

        result.title = match.groups.title;
        for (const [k, v] of Object.entries({
            '&#96;': '`',
            '&#39;': '\'',
            '&quot;': '"',
            '&nbsp;': ' ',
            '&gt;': '>',
            '&lt;': '<',
            '&yen;': '¥',
        })) result.title = result.title.replace(new RegExp(k, 'g'), v);

        result.cover = new URL('https://images.weserv.nl');
        for (const [k, v] of Object.entries({
            url: match.groups.cover,
            il: '',
            we: '',
            h: 360,
            q: 70,
        })) result.cover.searchParams.set(k, v);
        result.cover = result.cover.toString();

        result.success = true;
    } catch (error) {
        console.log(error);
    }

    return new Response(JSON.stringify(result), responseConfig);
}