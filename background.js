
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
    }
})

chrome.webNavigation.onCompleted.addListener(function(details) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.executeScript(tabs[0].id, { file: "getVideoData.js" });
      });
  }, {
      url: [{
          // Runs on example.com, example.net, but also example.foo.com
          hostContains: 'www.youtube.com'
      }],
  });