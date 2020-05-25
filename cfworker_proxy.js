addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    let responseConfig = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://akarin.dev',
            'Content-Type': 'application/json',
        },
    }
    let articleURL = new URL(request.url).searchParams.get('url');

    if (!articleURL || !articleURL.startsWith('https://mp.weixin.qq.com')) {
        return new Response('{"success":false}', responseConfig);
    }

    let requestURL = new URL('https://i.akarin.dev/misc/get_article_info.php');
    requestURL.searchParams.set('url', articleURL);

    return new Response(
        await (
            await fetch(requestURL.toString())
        ).text(), 
        responseConfig
    );
}