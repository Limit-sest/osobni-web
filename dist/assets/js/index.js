//Vytvoření mouse followeru
if (window.matchMedia('(pointer:fine)').matches) {
    const cursor = new MouseFollower({
        speed: 0.3
    });
}

//Kopírování mailu
document.getElementById("mail_btn").addEventListener("click", function() {
    const text = "kontakt@limit6.eu";
    const alert = document.getElementById('alert');

    var TempText = document.createElement("input");
    TempText.value = text;
    document.body.appendChild(TempText);
    TempText.select();
    
    document.execCommand("copy");
    document.body.removeChild(TempText);
//Alert
    alert.classList.remove('opacity-0', 'translate-y-full');
    alert.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
        alert.classList.remove('opacity-100', 'translate-y-0');
        alert.classList.add('opacity-0', 'translate-y-full');
    }, 3000);

});
//Back to top
const backToTop = document.getElementById("back-to-top")
window.onscroll = function() {

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTop.classList.remove('scale-0');
    } else {
        backToTop.classList.add('scale-0');
    }
};
