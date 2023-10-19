var loadingTextArray = [
    "Chceš s něčím pomoct? 🤝",
    "Jsem rád žes dorazil ❤️",
    "Mezitím se můžeš napít 🥤",
    "Doufám, že máš hezký den! 🙂",
    "Jak se máš? 🤔",
    "Zdar! 👋",
    "Ahoj! 👋"
];

// Function to select a random loading text
function getRandomLoadingText() {
    var randomIndex = Math.floor(Math.random() * loadingTextArray.length);
    return loadingTextArray[randomIndex];
}

// Update loading text with a random message
function updateLoadingText() {
    var loadingTextElement = document.getElementById('loading-text');
    loadingTextElement.textContent = getRandomLoadingText();
}
updateLoadingText();

window.onload = function() {
    setTimeout(() => {
        var loader = document.getElementById('loader');
        loader.classList.add('hide');
        setTimeout(function() {
            loader.style.display = 'none';
        }, 1000); // Délka fade-out přechodu
    }, 500);
};
