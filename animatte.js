function startMoving() {
   var  elementt= document.getElementById("childcontainer1");
var positionn = [];
var intervalValue = setInterval(movve,10);
function movve() {
 if (positionn == 250) {
    clearInterval(intervalValue);
} else {
        positionn++;
            elementt.style.top = positionn + 'px';
            elementt.style.left = positionn + 'px';
        
     
}
}
}