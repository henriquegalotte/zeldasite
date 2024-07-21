const logoanimatespin = [

    { transform: "rotate(0)" },
    { transform: "rotate(360deg)" },

];


const logoanimatetime = {
    duration: 200,
    iterations: 2,
  };
const logoanimate = document.querySelector(".logoanimate");

const shieldanimate = document.querySelector(".shieldanimate");

shieldanimate.addEventListener("click", () => {
    shieldanimate.animate(logoanimatespin,logoanimatetime);
});

logoanimate.addEventListener("click",  () => {
    logoanimate.animate(logoanimatespin,logoanimatetime);
    
});