let container = document.querySelector(".container");
let btn = document.querySelector(".start_btn");
let scoreContainer = document.querySelector(".score");
let timeContainer = document.querySelector(".time");

btn.onclick = function () {
  let score = 0;
  let time = 11;
  container.innerHTML = "";

  let interval = setInterval(function showTarget() {
    // Création de la cible
    let target = document.createElement("img");
    target.setAttribute("id", "target");
    target.setAttribute("src", "monster.png");
    container.appendChild(target);
    target.style.top = Math.random() * (500 - target.offsetHeight) + "px";
    target.style.left = Math.random() * (600 - target.offsetHeight) + "px";

    // Faire disparaître la cible
    setTimeout(function() {
        target.remove();
    }, 1000)

    // Quand on clique sur le target
    target.onclick = function() {
        score += 1;
        target.style.display = "none";
    }
    time -= 1;

    // Afficher les infos
    scoreContainer.innerHTML = `Score : ${score}`
    timeContainer.innerHTML = `Temps : ${time}`

    // Fin du jeu quand le temps est écoulé
    if (time == 0) {
        clearInterval(interval)
        container.innerHTML = "le jeu est terminé";
    }



  }, 1000);
};
