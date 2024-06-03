// script.js
// Mostra o botão quando o usuário rolar 20px para baixo
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// Rola a página para o topo quando o botão for clicado
function topFunction() {
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
