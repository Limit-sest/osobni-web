var loadingTextArray = [
    "Chceš s něčím pomoct? 🤝",
    "Jsem rád žes dorazil/a ❤️",
    "Mezitím se můžeš napít 🥤",
    "Doufám, že máš hezký den! 🙂",
    "Vítej! 🙂",
    "Jak se máš? 🤔",
    "Zdar! 👋",
    "Ahoj! 👋"
] 

var loader = document.getElementById("loader") 
var heroBg = document.getElementById("hero-bg")

function getRandomLoadingText() {
    var randomIndex = Math.floor(Math.random() * loadingTextArray.length) 
    return loadingTextArray[randomIndex] 
}

function updateLoadingText() {
    var loadingTextElement = document.getElementById("loading-text") 
    loadingTextElement.textContent = getRandomLoadingText() 
}
updateLoadingText() 

let opacityToggle = true;

function animateHeroBg() {
    if (opacityToggle) {
        heroBg.style.opacity = 1
    } else {
        heroBg.style.opacity = 0.75
    }

    opacityToggle = !opacityToggle
}

window.onload = function() {
    setTimeout(function() {
        loader.classList.add("hide")
        setTimeout(function() {
            heroBg.style.opacity = 1
            setTimeout(function() {
                loader.style.display = "none"
                setInterval(animateHeroBg, 5100)
            }, 500)
        }, 500)
    }, 50)
}
