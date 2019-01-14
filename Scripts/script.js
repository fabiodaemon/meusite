function openModal() {
   
    document.getElementById('creditos').style.display = "block";

};

function closeModal() {
    
    document.getElementById('creditos').style.display = "none";

};

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}