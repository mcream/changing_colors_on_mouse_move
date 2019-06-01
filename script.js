/*
function mouseMoving(){
    var abc = document.getElementById("content")
    abc.clientX.innerHTML;
   }
   

   window.onload = function(){
       var bcd = document.getElementById("hashbox");
       if(bcd.onmouseover){
         mouseMoving();
       }
  }
   */
    const paragrapf = document.getElementById("content");
    const namebox = document.getElementById("namebox");
    const colorbox = document.getElementById("colorbox");
    const hashbox = document.getElementById("hashbox");

   document.onmousemove = function(e){
    colorbox.style.background = "green";
        paragrapf.innerHTML = e.clientX;
    
   }