var instagram = document.getElementById("instagram")
var tiktok = document.getElementById("tiktok")
var linkedin = document.getElementById("linkedin")

function showPanel(panel) {
  instagram.style.display = "none";
  tiktok.style.display = "none";
  linkedin.style.display = "none";
  panel.style.display = "block";
}

function start() {
  instagram.style.display = "block";
  tiktok.style.display = "none";
  linkedin.style.display = "none";
}

start()

function op200() {
  setTimeout(function (){showPanel(instagram)}, 1500);
  setTimeout(function (){showPanel(tiktok)}, 3000);
  setTimeout(function (){showPanel(linkedin)}, 4500);
}

setInterval(function(){op200()},4501);
