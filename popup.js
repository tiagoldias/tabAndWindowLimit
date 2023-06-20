document.addEventListener('DOMContentLoaded', function() {
  var maxTabsInput = document.getElementById('maxTabs');
  var maxWindowsInput = document.getElementById('maxWindows');
  var saveButton = document.getElementById('saveButton');

  // Load the current settings when the popup is opened
  chrome.storage.sync.get(['maxTabs', 'maxWindows'], function(result) {
    maxTabsInput.value = result.maxTabs || 6;
    maxWindowsInput.value = result.maxWindows || 1;
  });

  // Save the new settings when the Save button is clicked
  saveButton.addEventListener('click', function() {
    var maxTabs = parseInt(maxTabsInput.value);
    var maxWindows = parseInt(maxWindowsInput.value);

    // Save the settings in Chrome storage
    chrome.storage.sync.set({ maxTabs: maxTabs, maxWindows: maxWindows }, function() {
      alert('Settings saved!');
      window.close(); // Close the popup after saving
    });
  });
});
