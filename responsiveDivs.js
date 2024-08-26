function adjustMain() {
  // Get all div elements on the page
  const main = document.querySelectorAll("main");

  const paragraphsSizeAjust = (size) => {
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.fontSize = size.toString() + "rem";
    }
  };

  // Iterate through each div and apply styles based on window size
  main.forEach((div) => {
    if (window.innerWidth > 1100) {
      // Desktop view adjustments
      div.style.width = "100%";
      paragraphsSizeAjust(1.5);
    } else if (window.innerWidth > 768) {
      // Tablet view adjustments
      div.style.width = "100%";
      paragraphsSizeAjust(1);
    } else if (window.innerWidth > 480) {
      // Mobile view adjustments
      div.style.width = "100%";
      paragraphsSizeAjust(0.5);
    }
  });
}

// Initial adjustment when the page loads
adjustMain();

// Add an event listener to handle window resizing
window.addEventListener("resize", adjustMain);
