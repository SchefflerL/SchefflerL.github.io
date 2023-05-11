var nao = document.getElementById("nao");
nao.addEventListener("click", function() {
var randomX = Math.floor(Math.random() * window.innerWidth);
var randomY = Math.floor(Math.random() * window.innerHeight);
nao.style.position = "absolute";
nao.style.top = randomY + "px";
nao.style.left = randomX + "px";
});

var sim = document.getElementById("sim");
sim.addEventListener("click", function() {
window.location.href = "https://wa.me/5544991647018";
});
