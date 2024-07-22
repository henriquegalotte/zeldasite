

// Config Param Rotação
const logoanimatespin = [
    { transform: "rotate(0)" },
    { transform: "rotate(360deg)" },
];

// Config Param Tempo e Qtd de vezes que vai repetir
const logoanimatetime = {
    duration: 200,
    iterations: 2,
  };
// Config Param Pulo
const animatejump = [
        { transform: "translateY(0px)" },
        {transform: "translateY(-100px)", offset:0.5,},
        {transform: "translateY(0px)", offset:0.7,},
        {transform: "translateY(0px)", offset:1.0,}
];
// Config Param Tempo e Qtd de vezes que vai repetir
const jumptime = {
    duration:1000,
    iterations:1,
};

//Variável recebendo a classe para simplificar o uso sem digitar a linha toda do comando
const logoanimate = document.querySelector(".logoanimate");
//Variável recebendo a classe para simplificar o uso sem digitar a linha toda do comando
const shieldanimate = document.querySelector(".shieldanimate");



//Usando a variável acima/adicionando um evento para capturar a ação "click"
//VARIÁVEL.animate(paramAção,paramTempoErepetição)
shieldanimate.addEventListener("click", () => {
    shieldanimate.animate(animatejump,jumptime);
});
//Usando a variável acima/adicionando um evento para capturar a ação "click"
//VARIÁVEL.animate(paramAção,paramTempoErepetição)
logoanimate.addEventListener("click",  () => {
    logoanimate.animate(logoanimatespin,logoanimatetime);   
});