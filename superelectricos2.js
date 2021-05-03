var myStorage = window.localStorage, pageCount, clicks;
window.addEventListener('load', function(){
  document.getElementById("contador").innerHTML="donar: "+getClicksDonate()+", arcade: "+getClicksDonate()+", darthvader: "+getClicksDarthVader()+", colgante:" +getClicksColgante()+ ", reloj: " +getClicksReloj()+ ", llavero: "+getClicksLlavero();  
});

function getClicksDonate(){
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/donate",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function getClicksArcade(){
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/arcade",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function getClicksDarthVader(){
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/darthvader",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function getClicksColgante(){
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/colgante",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function getClicksReloj(){
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/reloj",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}

function getClicksLlavero(){
   $.ajax({
   url:"https://api.countapi.xyz/get/github.io.superelectricos/llavero",
   success: function(data) {
      clicks = data["value"];   }
   });
   return clicks;
}
