var loadingTextArray = [
    "Chcete s něčím pomoct? 🤝",
    "Mezitím se můžete napít 🥤",
    "Přeji hezký den! 🙂",
    "Vítejte! 🙂",
    "Jak se máte? 🤔",
    "Dobrý den! 👋",
    "Zdravím! 👋"
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

function loadImages() {
    var lazyloadImages = document.querySelectorAll("[data-src]");
  
    lazyloadImages.forEach(function(image) {
      image.src = image.dataset.src;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    loader.classList.add("hide")
    setTimeout(function() {
        heroBg.style.opacity = 1
        setTimeout(function() {
            loader.style.display = "none"
            loadImages()
            setInterval(animateHeroBg, 5100)
        }, 500)
    }, 500)
})
