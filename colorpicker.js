function myColor() {
    var color = document.getElementById('colorpick').value;
    document.body.style.backgroundColor = color;
    document.getElementById('box').value = color;
}

document.getElementById('colorpick')
    .addEventListener('input', myColor);

let boxer = document.getElementById('box');
boxer.addEventListener('click', function(evt) {
    evt.preventDefault();
    boxer.select();
    navigator.clipboard.writeText(boxer.value);
})