var bt1=document.getElementById("one");
var bt2=document.getElementById("two");
var bt3=document.getElementById("three");
var bt4=document.getElementById("four");

var randomnumber1=Math.floor(Math.random()*101) - 50;
var randomnumber2=Math.floor(Math.random()*101) - 50;
var randomnumber3=Math.floor(Math.random()*101) - 50;
var randomnumber4=Math.floor(Math.random()*101) - 50;

function over1(){
    bt1.style.marginTop= randomnumber1+"px";
    bt1.style.marginLeft= randomnumber2+"px";
    bt1.style.marginRight= randomnumber3+"px";
    bt1.style.marginBottom= randomnumber4+"px";
}

function over2(){
    bt2.style.marginTop= randomnumber2+"px";
    bt2.style.marginLeft= randomnumber1+"px";
    bt2.style.marginRight= randomnumber3+"px";
    bt2.style.marginBottom= randomnumber4+"px";
}

function over3(){
    bt3.style.marginTop= randomnumber3+"px";
    bt3.style.marginLeft= randomnumber1+"px";
    bt3.style.marginRight= randomnumber2+"px";
    bt3.style.marginBottom= randomnumber4+"px";
}

function over4(){
    bt4.style.marginTop= randomnumber4+"px";
    bt4.style.marginLeft= randomnumber3+"px";
    bt4.style.marginRight= randomnumber2+"px";
    bt4.style.marginBottom= randomnumber1+"px";
}

var disp=document.getElementById("know")

function show(){
    var offset = $("#one").offset();
disp.innerHTML="span is at " + offset.left + "," + offset.top + 
  " of document";
}


  