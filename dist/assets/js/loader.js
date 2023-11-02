var loadingTextArray = [
    "Chceš s něčím pomoct? 🤝",
    "Jsem rád žes dorazil/a ❤️",
    "Mezitím se můžeš napít 🥤",
    "Doufám, že máš hezký den! 🙂",
    "Jak se máš? 🤔",
    "Zdar! 👋",
    "Ahoj! 👋"
];


function getRandomLoadingText() {
    var randomIndex = Math.floor(Math.random() * loadingTextArray.length);
    return loadingTextArray[randomIndex];
}

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
        }, 1000); // Z letsstudy.cz
    }, 100);
};
