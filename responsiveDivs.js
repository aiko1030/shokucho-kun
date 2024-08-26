function adjustMain() {
  // Get all main elements on the page
  const main = document.querySelectorAll("main");

  const paragraphsSizeAdjust = (size) => {
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.fontSize = size.toString() + "rem";
    }
  };

  // Media queries for device screen size detection
  const desktopQuery = window.matchMedia("(min-width: 1100px)");
  const tabletQuery = window.matchMedia(
    "(min-width: 768px) and (max-width: 1099px)"
  );
  const mobileQuery = window.matchMedia(
    "(min-width: 481px) and (max-width: 767px)"
  );
  const smallMobileQuery = window.matchMedia("(max-width: 480px)");

  // Adjust based on the media queries
  main.forEach((div) => {
    if (desktopQuery.matches) {
      // Desktop view adjustments
      div.style.width = "100%";
      paragraphsSizeAdjust(1.5);
    } else if (tabletQuery.matches) {
      // Tablet view adjustments
      div.style.width = "100%";
      paragraphsSizeAdjust(1);
    } else if (mobileQuery.matches) {
      // Mobile view adjustments
      div.style.width = "100%";
      paragraphsSizeAdjust(0.75);
    } else if (smallMobileQuery.matches) {
      // Small mobile view adjustments
      div.style.width = "100%";
      paragraphsSizeAdjust(0.5);
    }
  });
}

// Initial adjustment when the page loads
adjustMain();

// Add an event listener for orientation changes
window.addEventListener("orientationchange", adjustMain);

// Add an event listener to handle device resizing
window.addEventListener("resize", adjustMain);
window.addEventListener("load", adjustMain);
