import "./highlighter.css";
console.log("Hello there!");

const texts = {
  the: {
    description: "The most common word in English",
  },
};

function highlightText(keyword: string) {
  const textNode = document.querySelector("*");
  if (textNode && textNode.textContent && textNode.textContent.trim()) {
    // Highlight logic using DOM manipulation
    textNode.innerHTML = textNode.innerHTML.replace(
      // Regular expression for case-insensitive search
      new RegExp(keyword, "gi"),
      `<span class="highlighted-elemented">${keyword}</span>`
      // `<span style='background-color: yellow'>${keyword}</span>`
    );
  }
}

highlightText("build");

// chrome.action.onClicked.addListener(() => {
//   //   // Retrieve highlight keyword from storage or options page
//   //   chrome.storage.sync.get("highlightKeyword", (data) => {
//   //     const keyword = data.highlightKeyword || "important";
//   //     highlightText(keyword);
//   //   });
// });
