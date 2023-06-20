// This event listener will be triggered when a new tab is created
chrome.tabs.onCreated.addListener(function(tab) {
  // Get the maximum number of tabs from storage
  chrome.storage.sync.get(['maxTabs'], function(result) {
    var maxTabs = result.maxTabs || 6;

    // Get all the tabs currently open
    chrome.tabs.query({}, function(tabs) {
      if (tabs.length > maxTabs) {
        // If the number of open tabs exceeds the limit, close the newly created tab after 1 second
        setTimeout(function() {
          chrome.tabs.remove(tab.id);
        }, 1000);
      }
    });
  });
});

// This event listener will be triggered when a new window is created
chrome.windows.onCreated.addListener(function(window) {
  // Get the maximum number of windows from storage
  chrome.storage.sync.get(['maxWindows'], function(result) {
    var maxWindows = result.maxWindows || 1;

    // Get all the windows currently open
    chrome.windows.getAll(function(windows) {
      if (windows.length > maxWindows) {
        // If the number of open windows exceeds the limit, close the newly created window after 1 second
        setTimeout(function() {
          chrome.windows.remove(window.id);
        }, 1000);
      }
    });
  });
});
