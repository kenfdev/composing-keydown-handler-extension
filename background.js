const tabStatus = {};

chrome.action.onClicked.addListener((tab) => {
  if (tab.id !== undefined) {
    const currentlyActive = tabStatus[tab.id] || false;
    tabStatus[tab.id] = !currentlyActive;
    updateIcon(tab.id, tabStatus[tab.id]);

    // Send a message to the content script in the active tab to start or stop listening to events
    chrome.tabs.sendMessage(tab.id, { command: tabStatus[tab.id] ? "start" : "stop" });
  }
});

function updateIcon(tabId, isActive) {
  const iconPath = isActive ? "icons/active16.png" : "icons/icon16.png";
  chrome.action.setIcon({
    tabId: tabId,
    path: iconPath
  });
}
