var count=1;
var x=document.getElementById("txt");
function values(count){
    if(count==1){
        return "2px 2px blue";
    }

    else if (count==2){
        return "2px 2px pink";
    }
    else if(count==3){
        return "2px 2px green";
    }
    else if(count==4){
        return "2px 2px violet";
    }
    else if(count==5){
        return "2px 2px yellow";
    }
    else if(count==6){
        return "2px 2px orange";
    }
    else if(count==7){
        return "2px 2px DodgerBlue";
    }
    else if(count==8){
        return "2px 2px MediumSeaGreen";
    }
    else if(count==9){
        return "2px 2px Tomato";
    }
    else if(count==10){
        return "2px 2px rgb(255, 99, 71)";
    }
    else if(count==11){
        return "2px 2px navyblue";
    }
    
}
function color_change(){
    x.style.textShadow=values(count);
    count=count+1;
    if(count==12){
        count=1;
    }
}
var y=document.getElementById("tst");
function color_change2(){
    y.style.textShadow=values(count);
    count=count-1;
    if(count==0){
        count=11;
    }
}
var z=document.getElementById("tat");
function color_change3(){
    z.style.textShadow=values(count);
    count=count+1;
    if(count==12){
        count=1;
    }
}