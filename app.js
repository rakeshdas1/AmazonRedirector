chrome.webRequest.onBeforeRequest.addListener(function (details) {
    return detectRedirect(details);
}, {
    urls: ["<all_urls>"]
}, ["blocking"]);

function detectRedirect(details) {

  var url = details.url;
  var http = "http://";
  var https = "https://";
  var amazonurl = "www.amazon.com";

    if (url.match(http + amazonurl) != null || url.match(amazonurl) || url.match(https + amazonurl) ) {
            return {
                redirectUrl: 'https://smile.amazon.com/?_encoding=UTF8&camp=1789&creative=390957&linkCode=ur2&tag=linustechtips-20'
            };
        };
}
