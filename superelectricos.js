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

document.getElementById('donate').addEventListener('click', addVisitsDonate);

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

document.getElementById('arcade').addEventListener('click', addVisitsArcade);

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

document.getElementById('darthvader').addEventListener('click', addVisitsDarthVader);

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

document.getElementById('colgante').addEventListener('click', addVisitsColgante);

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

document.getElementById('reloj').addEventListener('click', addVisitsReloj);

function getClicksReloj(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/reloj",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function addVisitsLlavero() {
  $.ajax({
   url:"https://api.countapi.xyz/hit/github.io.superelectricos/llavero",
   type: "GET"
   });
}

document.getElementById('llavero').addEventListener('click', addVisitsLlavero);

function getClicksLlavero(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/llavero",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}



