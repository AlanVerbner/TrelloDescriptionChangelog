chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'complete') {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: 'UrlChanged',
          url: details.url
        });
      });
    }
  });
});
