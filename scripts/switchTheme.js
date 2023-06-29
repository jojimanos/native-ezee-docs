function toggleTheme() {
  var themeElement = document.getElementById("theme");
  var themeIconElement = document.getElementById("themeIcon");

  if (themeElement.getAttribute("href") === "./styles/lightTheme.css") {
    themeElement.setAttribute("href", "./styles/darkTheme.css");
    themeIconElement.setAttribute("src", "./assets/sun.png");
    sessionStorage.setItem("selectedTheme", "dark");
  } else {
    themeElement.setAttribute("href", "./styles/lightTheme.css");
    themeIconElement.setAttribute("src", "./assets/moon.png");
    sessionStorage.setItem("selectedTheme", "light");
  }
}

window.addEventListener("load", function () {
  var themeElement = document.getElementById("theme");
  var themeIconElement = document.getElementById("themeIcon");
  var mainElement = document.getElementsByTagName("main")[0];

  // Apply the stored theme or default to light theme
  var selectedTheme = sessionStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    themeElement.setAttribute("href", "./styles/darkTheme.css");
    themeIconElement.setAttribute("src", "./assets/sun.png");
  } else {
    themeElement.setAttribute("href", "./styles/lightTheme.css");
    themeIconElement.setAttribute("src", "./assets/moon.png");
  }

  // Show the content after the theme is applied
  mainElement.style.visibility = "visible";
});
