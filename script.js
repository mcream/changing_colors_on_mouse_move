
    let paragrapf = document.getElementById("content");
    let namebox = document.getElementById("namebox");
    let colorbox = document.getElementById("colorbox");
    let hashbox = document.getElementById("hashbox");

   document.onmousemove = function(e){
        let hex_a = e.clientX / 3;
        let hex_b = e.clientY / 3;
        let hex_c = hex_a / hex_b;

         colorbox.style.backgroundImage = 'linear-gradient(217deg, rgb('+ hex_c +','+ hex_b +','+ hex_a +'), rgb(' + hex_a + ',' + hex_b + ','+ hex_c +') 90%)';
   }