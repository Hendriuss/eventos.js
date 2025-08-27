console.log(document.body);

const listarItens = document.getElementsByTagName('li');
console.log(listarItens);

const botao = document.getElementById('btn');
botao.addEventListener('click', function() {
    alert("você clicou no botão!")
});