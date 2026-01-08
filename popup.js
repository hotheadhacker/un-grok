// Popup script for Un-Grok extension

const enabledToggle = document.getElementById('enabled-toggle');
const analyticsToggle = document.getElementById('analytics-toggle');

// Load saved settings
chrome.storage.sync.get(['extensionEnabled', 'analyticsEnabled'], (result) => {
    enabledToggle.checked = result.extensionEnabled !== false; // Default to true
    analyticsToggle.checked = result.analyticsEnabled || false;
});

// Save settings when toggles change
enabledToggle.addEventListener('change', () => {
    const isEnabled = enabledToggle.checked;
    chrome.storage.sync.set({ extensionEnabled: isEnabled });
});

analyticsToggle.addEventListener('change', () => {
    const isEnabled = analyticsToggle.checked;
    chrome.storage.sync.set({ analyticsEnabled: isEnabled });
});
