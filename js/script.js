var elem = document.querySelectorAll('.rond');
var taupe = document.querySelector('.taupe');
var btn = document.querySelector('.btn');
var start = document.querySelector('.start');
var btn2 = document.querySelector('.btn2');
var text = document.querySelector('.restart');
var end = document.querySelector('.stop');
var spanPoint = document.querySelector('span');
var spanPoint2 = document.querySelector('.number');
var spanTime = document.querySelector('.timeSpan');
var spanTime2 = document.querySelector('.time p');
var points = 0;
var cpt = 31;

btn.addEventListener('click', function() {
  start.style.display = 'none';
  });
  
//nombre aléatoire entre 1 et 10
function hasard() {
  var max = 10;
  return 1 + Math.floor(Math.random() * max);
}


//faire apparaitre l'image dans un rond aléatoire
setInterval(function(a) {

  var cptActu = --cpt;
  spanTime.textContent = cptActu;

  if (cptActu <= 0) {
  end.style.display="block";
  cpt=31;
  }
  if (cptActu <= 15) {
    spanTime2.style.color = 'orange';
  }
  if (cptActu <= 8) {
    spanTime2.style.color = 'red';
  }
  else{
    spanTime2.style.color = 'black';
  }
  
  var random = hasard();
  elem[random].appendChild(taupe);

}, 750);



taupe.addEventListener('mousedown', function(e) {
  points++;
  spanPoint.innerHTML = points;
  spanPoint2.innerHTML = points;
});



// au bout de 30 sec la partie est terminé
setInterval(function() {
  end.style.display = 'block';
}, 32000)



//quand on click sur le btn restart le jeu redémarre avec le compteur à 30s et le score à 0
btn2.addEventListener('click', function() {
  end.style.display = "none";
  cpt=31;
  points=0;
  a();
  e();
});


