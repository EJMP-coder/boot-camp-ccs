.body2{
var i=0;
var images = [];
var time= 1000;
images[0] = "sexta.jpg"
images[1] = "portadaslider.jpg"
images[2] = "fotobajologo.png"
function changeImg() {
    document.slide.src= images[i];
    if(i< images.length-1) {
        i++;    } else{
            i = 0;
        }
 setTimeout("changeImg()" , time);
}
window.onload = changeImg;
}