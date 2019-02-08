console.log("helo");
var div = document.getElementById('wrapper');
function myFunction(){
  var div = document.getElementById('wrapper');

  var arr = ['a','b','c','d','e','f'];
  var j=0;
  var left = 0;
  var min=70;
 var max=10;
   for(i=0;i<30;i++){
  var span = document.createElement('span')
  span.textContent = arr[j];
  j++;
  left+=13;
  if(j>5){
    j=0;
  }
  var random =Math.floor(Math.random() * (+max - +min)) + +min;

span.style.top = random + "px";
  span.style.left = left +"px";
  div.appendChild(span);
}
var btn1 = document.createElement('span');
btn1.textContent = 'Rain';
btn1.id = 'button';
btn1.addEventListener("click",rain);
console.log(btn1);
div.appendChild(btn1);
}
function rain(){
  var b = document.getElementById('button');
 div.removeChild(b);

 var spa = document.querySelectorAll('#wrapper span');
var arr = []
var i = 0;
 spa.forEach(function(e){
   arr[i] = parseInt(e.style.top) ;
   i++;
 })

var cycle = setInterval(function(){
 i=0;
 var max=20;
 var min = 5;
spa.forEach(function(e){
var random =Math.floor(Math.random() * (+max - +min)) + +min;
  arr[i] += random;
  var temp1 = arr[i];
  var temp = temp1.toString();
  if(temp<=780)
  e.style.top = temp + "px";


i++;
})
},100)
 for(k=0;k<=50;k++){
i=0;
  cycle;


}
}
