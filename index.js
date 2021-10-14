var ran1=Math.floor(Math.random()*6)+1;
var ranImg1="dice"+ran1+".png";

var ranImgSrc="images/"+ranImg1;

document.querySelector(".img1").setAttribute("src",ranImgSrc);

var ran2=Math.floor(Math.random()*6)+1;

document.querySelector(".img2").setAttribute("src","images/dice"+ran2+".png");

if(ran1>ran2){
    document.querySelector("h1").innerHTML="Player 1 is winner";
}
else if(ran1<ran2){
    document.querySelector("h1").innerHTML="Player 2 is winner";
}
else{
    document.querySelector("h1").innerHTML="Draw";   
}
