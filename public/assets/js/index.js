const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };

function mailCopy () {
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
}

function discordCopy () {
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
}

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
            navItem.classList.remove('w-10', 'opacity-100','m-2','p-1','h-10');
            navItem.classList.add('h-0','w-0','p-0', 'm-0', 'opacity-0');
        }
    }
    if (elementIsVisibleInViewport(footerText) == false) {
        for (const navItem of navItems) {
            navItem.classList.remove('w-0');
            navItem.classList.remove('p-0');
            navItem.classList.remove('m-0');
            navItem.classList.remove('opacity-0');
            navItem.classList.remove('h-0');
            navItem.classList.add('h-10','w-10','m-2','p-1','opacity-100');

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
    const target = document.getElementById('hero');
    var rate = window.scrollY*-0.3

    target.style.transform = "translate3d(0px,"+rate+"px, 0px)"
};

var projectCards = document.querySelectorAll("[data-cardhref]");
projectCards.forEach(function(card){
    card.addEventListener("click", function(){
        window.open(card.dataset.cardhref, "_blank");
    })
})