# Privacy Policy for Un-Grok Chrome Extension

**Last Updated:** January 7, 2026

## Introduction

Un-Grok ("the Extension") is committed to protecting your privacy. This Privacy Policy explains our data practices for the Un-Grok Chrome extension.

## Data Collection

**We do NOT collect, store, or transmit any user data.**

The Extension operates entirely locally within your browser and does not:
- Collect personal information
- Track browsing history
- Monitor user behavior
- Send data to external servers
- Use analytics or telemetry
- Share information with third parties

## Data Storage

The only data stored by the Extension is:

- **Analytics Mode Preference**: A single boolean value (true/false) indicating whether you have enabled Analytics Mode. This preference is stored locally using Chrome's `chrome.storage.sync` API to persist across browser sessions and sync across your devices if you're signed into Chrome.

This setting contains no personal information and can be cleared at any time by uninstalling the Extension or clearing your browser's extension data.

## Permissions Used

The Extension requires the following permissions:

### storage
Used solely to save your Analytics Mode preference (on/off toggle) locally on your device.

### activeTab
Allows the Extension popup to interact with the currently active Twitter/X tab when you click the extension icon.

### Host Permissions (twitter.com, x.com)
Required to inject the content script that detects and filters tweets containing @GROK mentions on Twitter/X websites only.

## How the Extension Works

The Extension:
1. Monitors the Twitter/X web page DOM for tweets containing @GROK mentions
2. Hides matching tweets by setting their CSS display property to "none"
3. Optionally displays a local counter (when Analytics Mode is enabled)
4. All processing happens entirely within your browser

## Third-Party Services

The Extension does NOT:
- Make network requests to external servers
- Load remote code or scripts
- Integrate with third-party services
- Use cookies or tracking pixels

## Data Security

Since no data is collected or transmitted, there is no risk of data breaches or unauthorized access to your information through this Extension.

## Children's Privacy

The Extension does not knowingly collect information from children under 13. Since we don't collect any data at all, the Extension is safe for users of all ages.

## Changes to This Policy

We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last Updated" date above. Continued use of the Extension after changes constitutes acceptance of the updated policy.

## Your Rights

You have the right to:
- Disable or uninstall the Extension at any time
- Clear stored preferences through Chrome's extension settings
- Review the Extension's source code (available on GitHub)

## Contact

If you have questions about this Privacy Policy, please contact:

**Email:** [Your contact email]

## Compliance

This Extension complies with:
- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)

## Open Source

The Extension's source code is available for review, ensuring transparency in our privacy practices.

---

**Summary:** Un-Grok respects your privacy by not collecting any data. The Extension works entirely locally in your browser, storing only your Analytics Mode preference. No tracking, no data collection, no external requests.
