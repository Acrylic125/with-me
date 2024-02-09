import "./highlighter.css";
console.log("Hello there!");

const texts = {
  the: {
    description: "The most common word in English",
  },
};

function highlightText(keyword: string, description: string) {
  const textNode = document.querySelector("body *");
  if (textNode && textNode.textContent && textNode.textContent.trim()) {
    // Highlight logic using DOM manipulation
    // textNode.textContent = "";
    // const ele = document.createElement("span");
    // ele.classList.add("unset", "highlighted-elemented");
    // ele.innerText = keyword;

    textNode.innerHTML = textNode.innerHTML.replace(
      // Regular expression for case-insensitive search
      new RegExp(keyword, "gi"),
      `<span class="highlighted-elemented" data-highlighted-element-keyword="${keyword}">${keyword}</span>`
      // `<span style='background-color: yellow'>${keyword}</span>`
    );
  }
  const highlighted = document.querySelectorAll(`.highlighted-elemented[data-highlighted-element-keyword="${keyword}"]`);
  highlighted.forEach((element) => {
    if (!(element instanceof HTMLSpanElement)) {
      return;
    }
    element.onclick = () => {
      console.log("clicked");
    };
  });
}

highlightText("build", "The most common word in English");

// chrome.action.onClicked.addListener(() => {
//   //   // Retrieve highlight keyword from storage or options page
//   //   chrome.storage.sync.get("highlightKeyword", (data) => {
//   //     const keyword = data.highlightKeyword || "important";
//   //     highlightText(keyword);
//   //   });
// });
