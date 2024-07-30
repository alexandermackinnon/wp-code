function getScrollbarWidth() {
  // Create a temporary div container and apply styles that will force a scrollbar to appear
  let outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Create an inner div and add it to the outer div. The inner div is used to measure the width without the scrollbar.
  let inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculate the width of the scrollbar
  let scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Remove the outer div from the document
  outer.parentNode.removeChild(outer);

  if (scrollbarWidth > 0) {
    document.body.classList.add("scrollbars-visible");
  }

  return scrollbarWidth;
}

getScrollbarWidth();
