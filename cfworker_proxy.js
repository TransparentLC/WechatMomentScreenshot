addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
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
            'Access-Control-Allow-Origin': 'https://akarin.dev',
            'Content-Type': 'application/json',
        },
    }
    const articleURL = new URL(request.url).searchParams.get('url');

    try {
        if (!articleURL || !articleURL.startsWith('https://mp.weixin.qq.com')) throw new Error('Invalid URL');

        const articleContent = await (
            await fetch(articleURL)
        ).text();

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