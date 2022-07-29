const button = document.querySelector('#button');

button.addEventListener("click", () => alert('click en el botón'));

$('.button').click(() => {
    alert('Hola, estoy utilizando jQuery')
});


