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
