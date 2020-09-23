var x = 'A';
var y = "Bittergourd";
var z = "0808";
var cgpa = 10;
var to_display = x + y + z + cgpa

// PRINTING VALUE TO CONSOLE

console.log(to_display);

function display_console(element){
            var container = document.getElementById('demo');
            container.innerText = to_display;
            container.style.color = '#FFFFFF';
            container.style.fontFamily = "Poppins";
            container.style.background = "-webkit-linear-gradient(right, #F32170, #FFEB07, #2196F3)";
            container.style.letterSpacing = '4px';
            container.style.fontSize = "250%";
}
// hide console function not working

function hide_console(element){
    var new_container = document.getElementById('demo');
    container.innerText = 'Nothing';
    container.style.color = '#FFFFFF';
    container.style.fontFamily = "Poppins";
    container.style.background = "-webkit-linear-gradient(right, #F32170, #FFEB07, #2196F3)";
    container.style.letterSpacing = '4px';
    container.style.fontSize = "250%";
}