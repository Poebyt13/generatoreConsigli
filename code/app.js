

const p = document.getElementById("frase");
const button = document.getElementById("button");
const number = document.getElementById("advice__id");

const mq = matchMedia("(max-width: 500px)");

button.addEventListener("click",(e)=>{
    axios("https://api.adviceslip.com/advice").then(res=>{

        let idAdvice = "#" + res.data.slip.id;
        let frase = '"' + res.data.slip.advice + '"';
        button.disabled = true

        if (mq.matches == false) {
            if (frase.length >= 70 && frase.length <= 99) {
                p.style.fontSize = "1.1rem"
                p.style.lineHeight = "2rem";
            } else if (frase.length >= 100) {
                p.style.fontSize = "1.1rem";
                p.style.lineHeight = "1.7rem";
            } else {
                p.style.fontSize = "1.4rem"
                p.style.lineHeight = "2rem";
            }
        } else {
            if (frase.length >= 70 && frase.length <= 99) {
                p.style.fontSize = "1.1rem"
                p.style.lineHeight = "2rem";
            } else if (frase.length >= 100) {
                p.style.fontSize = "1.1rem";
                p.style.lineHeight = "1.7rem";
            } else {
                p.style.fontSize = "1.2rem"
                p.style.lineHeight = "2rem";
            }
        }

        number.innerHTML = idAdvice;

        p.innerHTML = frase;

        setTimeout(() => {
            button.disabled = false;
        }, 2100);
    });
})