chrome.webRequest.onBeforeRequest.addListener(function(details) {
  return detectRedirect(details);
}, {
  urls: ["<all_urls>"]
}, ["blocking"]);

function detectRedirect(details) {

  var url = details.url;
  var http = "http:%2F%2F";
  var https = "https:%2F%2F";
  var amazonurl = "www.amazon.com";
  var smileamazonurl = "smile.amazon.com";

  console.log("URL = " + url);
  if (url.match(http + amazonurl) || url.match(amazonurl) || url.match(https +
      amazonurl)) {
    return {
      redirectUrl: 'https://amazon.com/?_encoding=UTF8&camp=1789&creative=390957&linkCode=ur2&tag=linustechtips-20'
    };
    console.log("Redirected to Amazon");

  } else if (url.match(smileamazonurl)) {

    return {
      redirectUrl: 'https://smile.amazon.com/?_encoding=UTF8&camp=1789&creative=390957&linkCode=ur2&tag=linustechtips-20'
    };
    console.log("Redirected to Amazon Smile");

  };



}
