'use strict';

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: 'UrlChanged',
          url: details.url
        });
      });
    }
  });
});
