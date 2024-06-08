// chama a scrollFunction
window.onscroll = function() {
    scrollFunction();
};

//Exibe o btn para ser clicado apos descer 500px
function scrollFunction() {
    const topBtn = document.getElementById("topBtn");
    if (document.documentElement.scrollTop > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// Rola a página para o topo quando o botão for clicado
function topFunction() {
    document.documentElement.scrollTop = 0;
}
