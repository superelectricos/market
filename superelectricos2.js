var myStorage = window.localStorage, pageCount;
window.addEventListener('load', function(){
  document.getElementById("contador").innerHTML="donar: "+getClicksDonate()+", arcade: "+getClicksDonate()+", darthvader: "+getClicksDarthVader()+", colgante:" +getClicksColgante()+ ", reloj: " +getClicksReloj()+ ", llavero: "+getClicksLlavero();  
});

function getClicksDonate(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/donate",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function getClicksArcade(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/arcade",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function getClicksDarthVader(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/darthvader",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function getClicksColgante(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/colgante",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function getClicksReloj(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/reloj",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function getClicksLlavero(){
   let clicks;
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/llavero",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}
