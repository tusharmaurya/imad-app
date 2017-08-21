console.log('Loaded!');
//change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML='New Value';
var img = document.getElementById('madi');
function moveRight(){
    marginLeft = marginLeft + 100;
}
img.onclick = function () {
    var interval = setInterval(moveRight,100);
};