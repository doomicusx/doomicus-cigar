// ativar link animação
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// Ativar items da aquicição
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(ativarProduto);

// galeria linhas
const galeria = document.querySelectorAll("#epicusimagemcontainer img");
const galeriaContainer = document.querySelector("#epicusimagemcontainer");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}
function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}
galeria.forEach(eventosGaleria);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
