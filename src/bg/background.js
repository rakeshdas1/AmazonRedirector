chrome.webRequest.onBeforeRequest.addListener(function (details) {
    return detectRedirect(details);
}, {
    urls: ["<all_urls>"]
}, ["blocking"]);

function detectRedirect(details) {
    if (!!details.url.match('http://www.amazon.com') || !!details.url.match('amazon.com')) {
            return {
                redirectUrl: 'http://www.amazon.com/ref=as_li_ss_tl?_encoding=UTF8&camp=1789&creative=390957&linkCode=ur2&tag=linustechtips-20&linkId=XVVUX6TEDQOUT4OZ'
            };
        };
}
