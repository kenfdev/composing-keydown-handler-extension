const tabStatus = {};

let domainStatus = {};

// Load saved domain status on startup
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["domainStatus"], (data) => {
    domainStatus = data.domainStatus || {};
  });
});

// Helper to persist current domainStatus
function saveDomainStatus() {
  chrome.storage.local.set({ domainStatus });
}

// Get the domain from URL
function getDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

chrome.action.onClicked.addListener((tab) => {
  if (tab.id !== undefined) {
    const domain = getDomain(tab.url);
    if (domain) {
      const currentlyActive = domainStatus[domain] || false;
      domainStatus[domain] = !currentlyActive;
      updateIcon(tab.id, domainStatus[domain]);
      chrome.tabs.sendMessage(tab.id, { command: domainStatus[domain] ? "start" : "stop" });
      saveDomainStatus();
    }
  }
});

// Re-apply status on tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    const domain = getDomain(tab.url);
    if (domain && domainStatus[domain]) {
      chrome.tabs.sendMessage(tabId, { command: "start" });
      updateIcon(tabId, true);
    } else {
      chrome.tabs.sendMessage(tabId, { command: "stop" });
      updateIcon(tabId, false);
    }
  }
});

function updateIcon(tabId, isActive) {
  const iconPath = isActive ? "icons/active16.png" : "icons/icon16.png";
  chrome.action.setIcon({
    tabId: tabId,
    path: iconPath
  });
}
