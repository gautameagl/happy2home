//navigation of Slider
window.onload = function(){
var slider = document.getElementById("slider");
var dots = document.getElementById("dots");
var images = slider.getElementsByTagName("img");
var currentIndex = 0;


// Create a dot for each image
for (var i = 0; i < images.length; i++) {
  var dot = document.createElement("span");
  dot.classList.add("dot");
  dot.dataset.index = i;
  dot.addEventListener("click", function() {
    currentIndex = parseInt(this.dataset.index);
    updateSlider();
  });
  dots.appendChild(dot);
}

// Set the active dot to the first one
dots.children[currentIndex].classList.add("active");

//Next, we can add the logic to update the slider and active dot:
function updateSlider() {
    // Update the slider position
    var position = -currentIndex * 100;
    slider.getElementsByTagName("figure")[0].style.left = position + "%";
  
    // Update the active dot
    for (var i = 0; i < dots.children.length; i++) {
      dots.children[i].classList.remove("active");
    }
    dots.children[currentIndex].classList.add("active");
  }
  
  function autoAdvance() {
    // Advance to the next image
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateSlider();
  }
  
  setInterval(autoAdvance, 5000); // advance every 5 seconds
}
  