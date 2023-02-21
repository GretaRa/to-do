import "./main.css";
import  './task-display';
import "./modal-projects.js"


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
  resetCreateTask()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const tabContents = document.querySelectorAll(".tabContent");
const tabLinks = document.querySelectorAll(".tabLinks");

function activateTab (target) {
    const contentId = target.getAttribute('data-target');
    
    // Get all elements with class="tabcontent" and hide them, and show the current tab
    tabContents.forEach(tabContent => {
        tabContent.style.display = tabContent.id === contentId ? 'block' : 'none';
    });
  
    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks.forEach(tablink => {
        tablink.classList.remove('active');
    });

    // Add an "active" class to the button that opened the tab
    target.classList.add('active');
};

function tabbedWindows(evt) {
    const target = evt.currentTarget;

  activateTab(target);
};

document.querySelectorAll(".tabLinks").forEach(tab => {
    tab.addEventListener('click', tabbedWindows, false);
});
activateTab(tabLinks[0]);

//prevent form submittion

document.querySelectorAll('form').forEach( element => {
  element.addEventListener('submit', event => {
    event.preventDefault();
    // actual logic, e.g. validate the form
    console.log('Form submission cancelled.');
  });
})