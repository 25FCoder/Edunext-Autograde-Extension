document
  .getElementById("autoGradeEdunext")
  .addEventListener("click", function () {
    chrome.runtime.sendMessage({ text: "auto_grade_edunext" });
  });

document
  .getElementById("autoVoteEdunext")
  .addEventListener("click", function () {
    chrome.runtime.sendMessage({
      text: "auto_vote_edunext",
      number_vote: 20,
    });
  });
