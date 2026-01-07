// Popup script for Un-Grok extension

const analyticsToggle = document.getElementById('analytics-toggle');

// Load saved settings
chrome.storage.sync.get(['analyticsEnabled'], (result) => {
    analyticsToggle.checked = result.analyticsEnabled || false;
});

// Save settings when toggle changes
analyticsToggle.addEventListener('change', () => {
    const isEnabled = analyticsToggle.checked;
    chrome.storage.sync.set({ analyticsEnabled: isEnabled });
});
