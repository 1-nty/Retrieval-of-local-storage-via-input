/*
function oCB(){
  if(counter%2===1){
    var el = document.getElementById("id").innerHTML = 'abc';
  }else{
    var el = document.getElementById("id").innerHTML = 'Page';  
  }
  counter++
}
*/

//counter = 0


function storeVal(){
  var key = document.getElementById('key').innerHTML
  var value = document.getElementById('value').innerHTML
  localStorage.setItem(key, value);
  var para = document.getElementById('script').innerHTML = localStorage.getItem(key)
  
}
