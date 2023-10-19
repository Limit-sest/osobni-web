var toggled = false
const body = document.body;

if (window.matchMedia('(pointer:fine)').matches) {
    const cursor = new MouseFollower({
        speed: 0.3
    });

    function getToggleText() {
        if (toggled == false){
            return "vypnutí"
        }
        else if (toggled == true){
            return "zapnutí"
        }
    }

    function cursorToggleText() {
        var toggleText = document.getElementById('toggle-text');
        toggleText.textContent = getToggleText();
    }

    function cursorToggle(){
        if (toggled == false){
            cursor.hide();
            //body.style.cursor = 'auto';
            toggled = true
            cursorToggleText()
        }
        else if (toggled == true){
            cursor.show();
            //body.style.cursor = 'none';
            toggled = false
            cursorToggleText()
        }
    }
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Shift' || event.key === 'ShiftLeft' || event.key === 'ShiftRight') {
            cursorToggle()
        }
      });
    body.addEventListener('mouseenter', () => {
        if (toggled == true){
            cursor.hide();
            //body.style.cursor = 'auto';
        }
    });
}
else {
    var toggleDiv = document.getElementById('toggle-div');
    toggleDiv.classList.add('hidden');
    //body.style.cursor = 'auto';
}