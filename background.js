chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  try {
    if (request.text === "auto_grade_edunext") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, request);
      });
    } else if (request.text === "auto_vote_edunext") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, request);
      });
    }
  } catch (e) {
    console.log("error", e);
  }
});
