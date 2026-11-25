const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    botaoCurtir.addEventListener("click", curtir);
function curtir(){
    const contador = botaoCurtir.querySelector("span");
    contador.textContent = Number(contador.textContent) + 1;
}
});
const btnTema = document.querySelector(".btn-tema");
btnTema.addEventListener("click", mudarTema);
function mudarTema(){
    document.body.classList.toggle("tema-escuro");
}