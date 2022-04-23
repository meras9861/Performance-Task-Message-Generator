function userHappyFunction(){
  var happy = document.getElementById("userHappy").value;
  document.getElementById("userHappyInput").innerHTML = "You entered:  " + happy;
  if (happy == "happy"){
document.getElementById("noShow").style.display="block"
  }
}



/* 

if 
document.getElementById("userHappy").value == "certain value"
then something happens...
ex: buttons from input type radio pop up

*/