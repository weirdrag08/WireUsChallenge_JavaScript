function apply_filter(element){
    var color = element.id;
    var image_filter = document.getElementById('source-image');
    if(color == 'Red'){
        image_filter.style.filter = "invert(15%) sepia(81%) saturate(4385%) hue-rotate(355deg) brightness(108%) contrast(120%)";
    }
    if(color == 'Green'){
        image_filter.style.filter = "invert(64%) sepia(66%) saturate(3851%) hue-rotate(81deg) brightness(114%) contrast(130%)";  
    }
    if(color == 'Blue'){
        image_filter.style.filter = "invert(8%) sepia(85%) saturate(7417%) hue-rotate(247deg) brightness(104%) contrast(151%)";
    }
}