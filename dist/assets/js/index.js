const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };

//Vytvoření mouse followeru
if (window.matchMedia('(pointer:fine)').matches) {
    const cursor = new MouseFollower({
        speed: 0.5
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
//Kopírování discordu
document.getElementById("dc_btn").addEventListener("click", function() {
    const text = "@limit6";
    const alert = document.getElementById('alert-dc');

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

const backToTop = document.getElementById("back-to-top")
const navItems = document.querySelectorAll('.nav-item')
const footerText = document.getElementById("footer-text")

function backToTopCheck(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.classList.remove('w-0');
        backToTop.classList.remove('p-0');
        backToTop.classList.remove('m-0');
        backToTop.classList.remove('opacity-0');
        backToTop.classList.remove('h-0');
        backToTop.classList.add('h-10');
        backToTop.classList.add('w-10');
        backToTop.classList.add('m-2');
        backToTop.classList.add('p-1');
        backToTop.classList.add('opacity-100');
    }
    else {
        backToTop.classList.remove('w-10');
        backToTop.classList.remove('m-2');
        backToTop.classList.remove('p-1');
        backToTop.classList.remove('opacity-100');
        backToTop.classList.remove('h-10');
        backToTop.classList.add('h-0');
        backToTop.classList.add('w-0');
        backToTop.classList.add('p-0');
        backToTop.classList.add('m-0');
        backToTop.classList.add('opacity-0');
    }
}
function navItemsCheck(){
    if (elementIsVisibleInViewport(footerText) == true) {
        for (const navItem of navItems) {
            navItem.classList.remove('w-10');
            navItem.classList.remove('m-2');
            navItem.classList.remove('p-1');
            navItem.classList.remove('opacity-100');
            navItem.classList.remove('h-10');
            navItem.classList.add('h-0');
            navItem.classList.add('w-0');
            navItem.classList.add('p-0');
            navItem.classList.add('m-0');
            navItem.classList.add('opacity-0');
        }
    }
    if (elementIsVisibleInViewport(footerText) == false) {
        for (const navItem of navItems) {
            navItem.classList.remove('w-0');
            navItem.classList.remove('p-0');
            navItem.classList.remove('m-0');
            navItem.classList.remove('opacity-0');
            navItem.classList.remove('h-0');
            navItem.classList.add('h-10');
            navItem.classList.add('w-10');
            navItem.classList.add('m-2');
            navItem.classList.add('p-1');
            navItem.classList.add('opacity-100');
        }
    }
}


window.onload = function() {
    backToTopCheck()
    navItemsCheck()
};

window.onscroll = function() {
    backToTopCheck()
    navItemsCheck()
};
