// Un-Grok Content Script
// Removes tweets mentioning @GROK from Twitter/X

let removedCount = 0;
let analyticsEnabled = false;

// Load analytics preference
chrome.storage.sync.get(['analyticsEnabled'], (result) => {
  analyticsEnabled = result.analyticsEnabled || false;
});

// Listen for analytics toggle changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.analyticsEnabled) {
    analyticsEnabled = changes.analyticsEnabled.newValue;
    if (!analyticsEnabled) {
      removeAnalyticsBanner();
    }
  }
});

function shouldRemoveTweet(element) {
  const text = element.innerText || element.textContent || '';
  
  // Check for @GROK mention (case-insensitive)
  if (text.match(/@grok\b/i)) {
    return true;
  }
  
  // Check if this is a tweet from user GROK
  const userLinks = element.querySelectorAll('a[href*="/grok"]');
  for (const link of userLinks) {
    const href = link.getAttribute('href');
    if (href && href.match(/^\/(grok)$/i)) {
      return true;
    }
  }
  
  return false;
}

function removeTweet(article) {
  if (shouldRemoveTweet(article)) {
    article.style.display = 'none';
    removedCount++;
    updateAnalyticsBanner();
    return true;
  }
  return false;
}

function createAnalyticsBanner() {
  if (!analyticsEnabled) return null;
  
  const existing = document.getElementById('ungrok-analytics');
  if (existing) return existing;
  
  const banner = document.createElement('div');
  banner.id = 'ungrok-analytics';
  banner.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    transition: all 0.3s ease;
  `;
  banner.innerHTML = `🚫 Un-Grok: <span id="ungrok-count">0</span> tweets removed`;
  
  document.body.appendChild(banner);
  return banner;
}

function updateAnalyticsBanner() {
  if (!analyticsEnabled) return;
  
  const banner = createAnalyticsBanner();
  if (banner) {
    const countSpan = banner.querySelector('#ungrok-count');
    if (countSpan) {
      countSpan.textContent = removedCount;
    }
  }
}

function removeAnalyticsBanner() {
  const banner = document.getElementById('ungrok-analytics');
  if (banner) {
    banner.remove();
  }
}

function scanAndRemoveTweets() {
  // Twitter/X uses <article> elements for tweets
  const tweets = document.querySelectorAll('article[data-testid="tweet"]');
  
  tweets.forEach(tweet => {
    // Skip if already processed
    if (tweet.dataset.ungrokProcessed) return;
    
    tweet.dataset.ungrokProcessed = 'true';
    removeTweet(tweet);
  });
}

// Initial scan
scanAndRemoveTweets();

// Create a MutationObserver to watch for new tweets
const observer = new MutationObserver((mutations) => {
  scanAndRemoveTweets();
});

// Start observing the document for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Periodic scan as backup (every 2 seconds)
setInterval(scanAndRemoveTweets, 2000);

// Reset counter on page navigation
let lastUrl = location.href;
new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    removedCount = 0;
    updateAnalyticsBanner();
  }
}).observe(document, { subtree: true, childList: true });
