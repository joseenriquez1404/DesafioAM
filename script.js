var searchbar = document.getElementById("Barra-Busqueda");
var content = document.querySelector(".contentM");
var newContent = document.querySelector(".contentH");
var previousDisplayStyle = content.style.display;

document.addEventListener('DOMContentLoaded', function() {

    searchbar.addEventListener('input', function(){
        if(searchbar.value.trim() !== ''){
            content.style.display = 'none';
            newContent.style.display = 'flex';
        } else {
            newContent.style.display = 'none';
            content.style.display = previousDisplayStyle;
        }
    });
});


