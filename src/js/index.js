console.log('hello');


document.addEventListener("DOMContentLoaded", function () {
  console.log('DOMContentLoaded');


  var thisDiv = document.getElementById("hmtl-div");
  console.log(thisDiv);
  // thisDiv.className = '';
  thisDiv.addEventListener("click", colourToggle);

 function colourToggle() {
  console.log('colourToggle clicked');
  var thisDiv = document.getElementById("hmtl-div");
    if ( thisDiv.classList.contains('bg-green-400') ) {
      thisDiv.classList.replace("bg-green-400", "bg-red-400");
    } else {
      thisDiv.classList.replace("bg-red-400","bg-green-400");
    }
 }
});
