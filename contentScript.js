chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  try {
    if (request.text === "auto_grade_edunext") {
      let checkExist = setInterval(function () {
        const dialogGrade = document.querySelector(".MuiDialogContent-root");
        if (dialogGrade !== null) {
          clearInterval(checkExist);
        } else {
          document
            .evaluate(
              '//button[.//span[contains(text(), "Grade on groupmates")]]',
              document,
              null,
              XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
              null
            )
            .snapshotItem(0)
            .click();
          setTimeout(function () {
            for (let i = 1; i <= 25; i++) {
              for (let j = 1; j <= 20; j++) {
                const selector = `table > tbody > tr:nth-child(${i}) > td:nth-child(${j}) > span > label:nth-child(9)`;
                const element = document.querySelector(selector);
                if (element) element.click();
              }
            }
          }, 1000);
          setTimeout(function () {
            document
              .evaluate(
                '//button[.//span[contains(text(), "Grade")]]',
                document,
                null,
                XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                null
              )
              .snapshotItem(1)
              .click();
          }, 1000);
        }
      }, 1000);
    }

    if (request.text === "auto_vote_edunext") {
      function handleHover() {
        const vote4s = document.querySelector(".css-kjcfdy");
        if (vote4s) {
          setTimeout(function () {
            for (let i = 0; i < 20; i++) {
              vote4s.click();
            }
          }, 1000);
        }
      }
      const voteElements = document.querySelectorAll(".vote-cmt");
      voteElements.forEach(function (voteElement, index) {
        voteElement.addEventListener("mouseover", function () {
          handleHover();
        });
      });
    }
    return true;
  } catch (e) {
    console.log("error", e);
  }
});
