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

// Function to adjust the font size
function adjustFontSize() {
  const container = document.querySelector('.about-text');
  if (!container) return;
  const textElement = container.querySelector('p');
  let fontSize = parseInt(window.getComputedStyle(textElement, null).getPropertyValue('font-size'));

  // Reset overflow to initial state
  container.style.overflowY = 'visible';

  // Check if the text overflows the container
  while (container.scrollHeight > container.clientHeight) {
    fontSize--; // Reduce the font size by 1
    textElement.style.fontSize = fontSize + 'px'; // Apply the new font size
  }
}

// Call the function initially
adjustFontSize();

// Call the function whenever the window is resized
window.addEventListener('resize', adjustFontSize);

document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuButton = document.getElementById("mobile-menu");
  const navList = document.querySelector("nav ul");

  mobileMenuButton.addEventListener("click", function() {
    navList.classList.toggle("active");
  });
});