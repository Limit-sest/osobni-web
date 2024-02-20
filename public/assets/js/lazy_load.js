window.onload = function() {
  var lazyloadImages = document.querySelectorAll("[data-src]");
  
  function loadImages() {
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var closestDistance = Number.MAX_SAFE_INTEGER;
    
    lazyloadImages.forEach(function(image) {
      var distanceFromViewport = Math.abs(image.offsetTop - scrollTop);
      
      // Load images that are within a dynamically adjusted range
      if (distanceFromViewport < windowHeight * 1.5) {
        image.src = image.dataset.src;
      }
      
      // Update the closest distance to prioritize loading images
      if (distanceFromViewport < closestDistance) {
        closestDistance = distanceFromViewport;
      }
    });
    
    // Remove loaded images from the list
    lazyloadImages = document.querySelectorAll("[data-src]");
    
    // If all images are loaded, remove the scroll listener
    if(lazyloadImages.length == 0) { 
      window.removeEventListener("scroll", loadImages);
    }
  }
  
  // Load images when the page first loads
  loadImages();
  
  // Load images when scrolling
  window.addEventListener("scroll", loadImages);
}
