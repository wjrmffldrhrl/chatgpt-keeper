// popup.js

// Get the save button
const saveButton = document.getElementById('save-button');

// Add a click event listener to the save button
saveButton.addEventListener('click', saveData);

// The saveData function
function saveData() {
    console.log('Click~!');

    // Get the current tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        const activeTabId = activeTab.id; // or do whatever you need

        // Save the data to storage
        chrome.storage.local.set({ 'activeTabId': activeTabId }, function () {
            console.log('Data saved');
        });
    });
}
