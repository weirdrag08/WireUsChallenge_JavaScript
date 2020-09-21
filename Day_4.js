function remove_img(element){
    if(element.id == "mybutton"){
        document.getElementById("firstsection").style.display = 'none';
        document.getElementById("heading").style.fontFamily = 'Lobster';
        document.getElementById('sound').muted = true;
        var x = document.getElementById("mybutton");
        x.innerHTML = "You are Awesome";
        x.id = "newbutton";
}
 else{
    document.getElementById("firstsection").style.display = 'block';
    document.getElementById("heading").style.fontFamily = 'Trade Winds'; 
    element.innerHTML = "Click me to see the magic";
    document.getElementById("sound").muted = false;
    element.id = 'mybutton';
 }
}