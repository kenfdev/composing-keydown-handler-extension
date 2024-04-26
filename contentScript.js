// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command === "start") {
    document.addEventListener('keydown', handleKeydown, true);
  } else if (request.command === "stop") {
    document.removeEventListener('keydown', handleKeydown, true);
  }
});

function handleKeydown(event) {
  if (event.key === 'Enter' && event.isComposing) {
    event.stopPropagation();
  }
}
