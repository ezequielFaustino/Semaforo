//const p/ armazenar os botoes do semaforo e a img do semaforo;
const buttons = document.getElementById('buttons');
const img = document.getElementById('img');

//variavel global p/ armazenar a posicao do array cores
let colorIndex = 0;
let stopInterval = null; 

//evento de click p/ 'ligar' os semaforos;
const trafficLight = (event) =>{
    stopAutomatic();
    // console.log(event.target.id) //mostra o botao q foi clicado;
    turnOn[event.target.id]();
};

////verificar qual é a posicao do vetor e mudar de posicao de acordo
const nextIndex = () =>{
    if(colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0
    }
};

const changeColor = () =>{
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]();
    nextIndex();
};

const stopAutomatic = () =>{
    clearInterval(stopInterval);
};

const turnOn = { //p/ cada funcao, 'liga' a o semaforo correspondente;
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => stopInterval =  setInterval(changeColor, 1000) //a cada segundo, o semaforo 'liga';
};

buttons.addEventListener('click', trafficLight);
