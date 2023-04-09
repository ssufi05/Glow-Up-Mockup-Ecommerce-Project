









// Get the button:
let mybutton = document.getElementById("myBtn");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When the user clicks on the button, scroll to the bottom of the document
function bottomFunction() {
  document.body.scrollTo = 0; // For Safari
  document.documentElement.scrollTo(0, document.body.scrollHeight); // For Chrome, Firefox, IE and Opera
}