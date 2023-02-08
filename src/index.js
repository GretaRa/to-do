import "./main.css";
import {createTask} from './task-display';


// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let openBtn = document.getElementById("add-task-btn");

// Get the <span> element that closes the modal
let closeBtn = document.getElementsByClassName("close-modal")[0];

// When the user clicks on the button, open the modal
openBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}