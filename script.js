/*
function mouseMoving(){
    let abc = document.getElementById("content")
    abc.clientX.innerHTML;
   }
   

   window.onload = function(){
       let bcd = document.getElementById("hashbox");
       if(bcd.onmouseover){
         mouseMoving();
       }
  }
   */
    let paragrapf = document.getElementById("content");
    let namebox = document.getElementById("namebox");
    let colorbox = document.getElementById("colorbox");
    let hashbox = document.getElementById("hashbox");

   document.onmousemove = function(e){
        let hex_a = e.clientX / 6;
        let hex_b = e.clientX;
        let hex_c = e.clientY;
        let ranNumb = Math.floor((Math.random() * 255) + 1);

        colorbox.style.background = 'rgb(' + hex_a + ', ' + '0' + ', ' + '0' + ')';
   }