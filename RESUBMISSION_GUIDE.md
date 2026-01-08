# Chrome Web Store Resubmission Guide - v1.0.1

## What Changed

**Fixed:** Removed unused `activeTab` permission from manifest.json as per Chrome Web Store feedback.

**Version:** Updated to 1.0.1

---

## Privacy Practices Tab

### Single Purpose Description
```
Remove tweets mentioning @GROK from Twitter/X feeds to provide users with a cleaner browsing experience free from AI-generated content discussions.
```

### Permission Justifications

#### Host Permissions (twitter.com, x.com)
```
Host permissions for twitter.com and x.com are required to inject the content script that detects and filters tweets containing @GROK mentions. The extension must access the DOM of these specific websites to identify and hide relevant tweets in real-time as users browse their feeds.
```

#### Storage Permission
```
The storage permission is used to save two user preferences: the extension enable/disable state and the Analytics Mode toggle (on/off). These settings are stored locally using chrome.storage.sync to persist across browser sessions and sync across the user's devices. No other data is collected or stored.
```

#### Remote Code Justification
```
This extension does NOT use remote code. All code is bundled within the extension package and executed locally. No external scripts, APIs, or remote resources are loaded or executed.
```

### Data Usage Certification
```
☑ This extension does NOT collect, store, or transmit any user data
☑ All filtering operations happen entirely locally within the user's browser
☑ The only data stored are two boolean preferences (extension enabled and Analytics Mode)
☑ No analytics, tracking, or telemetry of any kind
☑ No external network requests are made
☑ Complies with Chrome Web Store Developer Program Policies
```

---

## Store Listing Tab

### Detailed Description
```
Un-Grok is a Chrome extension that automatically removes tweets mentioning @GROK from your Twitter/X feed, providing a cleaner and more focused browsing experience.

🎯 FEATURES:

• Enable/Disable Toggle: Pause or resume filtering at any time
• Automatic Filtering: Instantly hides any tweet containing @GROK mentions (case-insensitive)
• User Account Filtering: Removes tweets posted by the GROK user account
• Real-time Detection: Works seamlessly as you scroll through your feed
• Analytics Mode: Optional toggle to display a counter showing how many tweets were removed
• Privacy-Focused: All filtering happens locally in your browser - no data collection
• Lightweight: Minimal performance impact with efficient DOM monitoring

🔒 PRIVACY:

This extension respects your privacy:
- No data collection or tracking
- No external network requests
- Only stores your preferences locally (extension enabled/disabled and analytics mode)
- Open source and transparent

💡 HOW IT WORKS:

1. Install the extension
2. Visit Twitter/X (twitter.com or x.com)
3. Tweets mentioning @GROK are automatically hidden
4. Click the extension icon to:
   - Toggle the extension on/off
   - Toggle Analytics Mode to see removal count

Perfect for users who want to filter out AI-generated content discussions and maintain a cleaner social media experience.
```

### Category
```
Social & Communication
```

### Language
```
English (United States)
```

---

## Checklist for Resubmission

- [x] Removed unused `activeTab` permission
- [x] Updated version to 1.0.1
- [ ] Create new ZIP package
- [ ] Upload new version to Chrome Web Store
- [ ] Update permission justifications (remove activeTab section)
- [ ] Update storage justification to mention both preferences
- [ ] Save draft
- [ ] Submit for review

---

## Quick Copy-Paste Sections

### Single Purpose (132 characters)
Remove tweets mentioning @GROK from Twitter/X feeds to provide users with a cleaner browsing experience free from AI-generated content discussions.

### Host Permissions Justification
Host permissions for twitter.com and x.com are required to inject the content script that detects and filters tweets containing @GROK mentions. The extension must access the DOM of these specific websites to identify and hide relevant tweets in real-time as users browse their feeds.

### Storage Justification (UPDATED)
The storage permission is used to save two user preferences: the extension enable/disable state and the Analytics Mode toggle (on/off). These settings are stored locally using chrome.storage.sync to persist across browser sessions and sync across the user's devices. No other data is collected or stored.

### Remote Code Justification
This extension does NOT use remote code. All code is bundled within the extension package and executed locally. No external scripts, APIs, or remote resources are loaded or executed.
