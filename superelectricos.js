var myStorage = window.localStorage, pageCount;
window.addEventListener('load', function(){
   $.ajax({
   url:"https://api.countapi.xyz/hit/github.io.superelectricos/index",
   type: "GET"
   });


   if(!myStorage.getItem("pageCount")){
      myStorage.setItem('pageCount', 1);
   } else {
      pageCount = myStorage.getItem("pageCount");
      pageCount = parseInt(pageCount) + 1;
      myStorage.setItem('pageCount', pageCount );
   }
   console.log('page view count', myStorage.getItem("pageCount"));
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/index",
   success: function(data) {
      document.getElementById("contador").innerHTML=data["value"];   }
   });
});

function addVisitsDonate() {
  $.ajax({
   url:"https://api.countapi.xyz/hit/github.io.superelectricos/donate",
   type: "GET"
   });
}

var button = document.getElementById('donate');
button.addEventListener('click', addVisitsDonate);

function getClicksDonate(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/donate",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function addVisitsArcade() {
  $.ajax({
   url:"https://api.countapi.xyz/hit/github.io.superelectricos/arcade",
   type: "GET"
   });
}

var arcade = document.getElementById('arcade');
arcade.addEventListener('click', addVisitsArcade);

function getClicksArcade(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/arcade",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function addVisitsDarthVader() {
  $.ajax({
   url:"https://api.countapi.xyz/hit/github.io.superelectricos/darthvader",
   type: "GET"
   });
}

var darthvader = document.getElementById('darthvader');
darthvader.addEventListener('click', addVisitsDarthVader);

function getClicksDarthVader(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/darthvader",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}


function addVisitsColgante() {
  $.ajax({
   url:"https://api.countapi.xyz/hit/github.io.superelectricos/colgante",
   type: "GET"
   });
}

var colgante = document.getElementById('colgante');
colgante.addEventListener('click', addVisitsColgante);

function getClicksColgante(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/colgante",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function addVisitsReloj() {
  $.ajax({
   url:"https://api.countapi.xyz/hit/github.io.superelectricos/reloj",
   type: "GET"
   });
}

var reloj = document.getElementById('reloj');
reloj.addEventListener('click', addVisitsReloj);

function getClicksReloj(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/reloj",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}



