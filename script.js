const modeToggle = document.getElementById("mode-toggle")
const cards = document.querySelectorAll(".card")
const colorMode = "colorMode"


window.addEventListener("load", () => {
    modeToggle.innerHTML = localStorage.getItem(colorMode) || "dark_mode";
    if (modeToggle.innerHTML === "light_mode") {
        // dark mode settings
        document.documentElement.style.setProperty("--background-color", "#000")
        document.documentElement.style.setProperty("--background-contrast", "#202020")
        document.documentElement.style.setProperty("--text-color", "#ccc")
        document.documentElement.style.setProperty("--cta-text-color", "#ccc")
        document.documentElement.style.setProperty("--secondary-text-color", "#a8a8a8")
        document.documentElement.style.setProperty("--icon-color", "#55a8a8")
        document.documentElement.style.setProperty("--purple-gradient", "linear-gradient(125deg, rgba(124,48,121,1) 0%, rgba(163,27,160,1) 100%)")
        document.documentElement.style.setProperty("--blue-gradient", "linear-gradient(125deg, rgba(50,98,149,1) 0%, rgba(35,100,193,1) 100%)")
    } else {
        // light mode settings
        document.documentElement.style.setProperty("--background-color", "#fff")
        document.documentElement.style.setProperty("--background-contrast", "#f6f6f6")
        document.documentElement.style.setProperty("--text-color", "#545454")
        document.documentElement.style.setProperty("--cta-text-color", "#fff")
        document.documentElement.style.setProperty("--secondary-text-color", "#6b6b6b")
        document.documentElement.style.setProperty("--icon-color", "#3382db")
        document.documentElement.style.setProperty("--blue-gradient", "linear-gradient(125deg, rgba(64,117,173,1) 0%, rgba(37,127,228,1) 100%)")
        document.documentElement.style.setProperty("--purple-gradient", "linear-gradient(125deg, rgba(173,64,169,1) 0%, rgba(215,44,212,1) 100%)")
    }
});
  
modeToggle.addEventListener("click", () => {
    if (modeToggle.innerHTML === "dark_mode") {
        modeToggle.innerHTML = "light_mode";
        // dark mode settings
        document.documentElement.style.setProperty("--background-color", "#000")
        document.documentElement.style.setProperty("--background-contrast", "#202020")
        document.documentElement.style.setProperty("--text-color", "#ccc")
        document.documentElement.style.setProperty("--cta-text-color", "#ccc")
        document.documentElement.style.setProperty("--secondary-text-color", "#a8a8a8")
        document.documentElement.style.setProperty("--icon-color", "#55a8a8")
        document.documentElement.style.setProperty("--purple-gradient", "linear-gradient(125deg, rgba(124,48,121,1) 0%, rgba(163,27,160,1) 100%)")
        document.documentElement.style.setProperty("--blue-gradient", "linear-gradient(125deg, rgba(50,98,149,1) 0%, rgba(35,100,193,1) 100%)")
        
    } else {
        modeToggle.innerHTML = "dark_mode";
        // light mode settings
        document.documentElement.style.setProperty("--background-color", "#fff")
        document.documentElement.style.setProperty("--background-contrast", "#f6f6f6")
        document.documentElement.style.setProperty("--text-color", "#545454")
        document.documentElement.style.setProperty("--cta-text-color", "#fff")
        document.documentElement.style.setProperty("--secondary-text-color", "#6b6b6b")
        document.documentElement.style.setProperty("--icon-color", "#3382db")
        document.documentElement.style.setProperty("--blue-gradient", "linear-gradient(125deg, rgba(64,117,173,1) 0%, rgba(37,127,228,1) 100%)")
        document.documentElement.style.setProperty("--purple-gradient", "linear-gradient(125deg, rgba(173,64,169,1) 0%, rgba(215,44,212,1) 100%)")
    }
    localStorage.setItem(colorMode, modeToggle.innerHTML);
});
