console.log("Script loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
  // Find the toggle button and navigation links
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("dropdown-nav");

  // When the button is clicked, toggle the "show" class
  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", (event) => {
      event.preventDefault();
      navLinks.classList.toggle("show");
    });
  }

  // typing effect

  const typingElement = document.getElementById("typing-text");
  const text = ">> print(\"Hello, World!\")";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;

      setTimeout(typeText, 100);
    } else {

      // to wait 1s after finishing 
      setTimeout(deleteText, 1000);
    }
  }

  function deleteText() {
    if (index > 0) {
      typingElement.textContent = text.substring(0, index - 1);
      index--;

      setTimeout(deleteText, 50);
    } else {
      // to wait 0.5s after finishing deleting
      setTimeout(typeText, 500);
    }
  }

  if (typingElement) {
    typeText();
  } else {
    console.log("ERROR: typing-text was not found!");
  }

  // Dark and Light theme toggle

  const themeToggle =
    document.getElementById("theme-toggle");
  const root = document.documentElement;

  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";

    root.classList.remove("theme-dark", "theme-light");
    root.classList.add(`theme-${initialTheme}`);

    themeToggle.textContent = initialTheme === "dark" ? "☼" : "⏾";

    themeToggle.setAttribute(
      "aria-label",
      initialTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
    themeToggle.addEventListener("click", () => {
      const isDark = root.classList.contains("theme-dark");
      const newTheme = isDark ? "light" : "dark";

      root.classList.remove("theme-dark", "theme-light");
      root.classList.add(`theme-${newTheme}`);

      themeToggle.textContent = newTheme === "dark" ? "☼" : "⏾";

      themeToggle.setAttribute(
        "aria-label",
        newTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );

      localStorage.setItem("theme", newTheme);
    });

  }

});