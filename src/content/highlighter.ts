console.log("Hello there!");

function highlightText(keyword: string) {
  const textNode = document.querySelector("*");
  if (textNode && textNode.textContent && textNode.textContent.trim()) {
    // Highlight logic using DOM manipulation
    textNode.innerHTML = textNode.innerHTML.replace(
      // Regular expression for case-insensitive search
      new RegExp(keyword, "gi"),
      `<span style='background-color: yellow'>${keyword}</span>`
    );
  }
}
highlightText("the");

// chrome.action.onClicked.addListener(() => {
//   //   // Retrieve highlight keyword from storage or options page
//   //   chrome.storage.sync.get("highlightKeyword", (data) => {
//   //     const keyword = data.highlightKeyword || "important";
//   //     highlightText(keyword);
//   //   });
// });
