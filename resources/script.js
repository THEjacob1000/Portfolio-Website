let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Downscroll
    document.querySelector("header").style.top = "-100px";
  } else {
    // Upscroll
    document.querySelector("header").style.top = "0";
  }
  
  lastScrollTop = scrollTop;
});

window.addEventListener('resize', adjustFontSize);
document.addEventListener('DOMContentLoaded', adjustFontSize);

function adjustFontSize() {
  const container = document.querySelector('.about-text');
  const paragraph = container.querySelector('p');
  
  let fontSize = 16; // Start with a base font size in pixels
  let maxHeight = container.clientHeight - 40; // Account for some padding and other text
  let textHeight;

  // Reset to base size to measure
  paragraph.style.fontSize = `${fontSize}px`;
  textHeight = paragraph.clientHeight;

  // Increase font size if there's extra space
  while (textHeight < maxHeight && fontSize < 40) {
    fontSize += 0.5;
    paragraph.style.fontSize = `${fontSize}px`;
    textHeight = paragraph.clientHeight;
  }

  // Decrease font size if text overflows
  while (textHeight > maxHeight && fontSize > 10) {
    fontSize -= 0.5;
    paragraph.style.fontSize = `${fontSize}px`;
    textHeight = paragraph.clientHeight;
  }
}

