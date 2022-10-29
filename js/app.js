// DOM

const darkButton = document.getElementById("dark")
const lightButton = document.getElementById("light")
const solarButton = document.getElementById("solar")
const body = document.body

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Events
darkButton.onclick = () => {
    body.classList.replace("light", "dark")
    localStorage.setItem('theme', 'dark');
}
lightButton.onclick = () => {
    body.classList.replace("dark", "light")
    localStorage.setItem('theme', 'light');
}
solarButton.onclick = () => {
    if (body.classList.contains("solar")) {
        body.classList.remove("solar")
        solarButton.textContent = "Solarise"
        localStorage.removeItem('isSolar');
    }
    else {
        body.classList.add("solar")
        solarButton.textContent = "Normalise"
        localStorage.setItem('isSolar', true);
    }
}