var modal_curriculum = document.getElementById("curriculum");

// Get the button that opens the modal_curriculum
var curr = document.getElementById("myBtn_curr");

// Get the <span> element that closes the modal_curriculum
var span = document.getElementsByClassName("close-curr")[0];

// When the user clicks the button, open the modal_curriculum 
curr.onclick = function() {
  modal_curriculum.style.display = "block";
}

// When the user clicks on <span> (x), close the modal_curriculum
span.onclick = function() {
  modal_curriculum.style.display = "none";
}

// When the user clicks anywhere outside of the modal_curriculum, close it
window.onclick = function(event) {
  if (event.target == modal_curriculum) {
    modal_curriculum.style.display = "none";
  }
}