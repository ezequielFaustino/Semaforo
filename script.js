const image = document.getElementById('img');
const buttons = document.getElementById('buttons'); //pega a div buttons p/ interagir c/ cada botao da div;
let colorIndex = 0;

const trafficLight = (event) =>{
    turnOn[event.target.id]();
    // console.log(event.target.id) //mostra o id de cada botao clicado; ex.: id='red';    
}

const nextIndex = () =>{
    if(colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0;
    }
}

const changeColor = () =>{
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]();
    nextIndex();
    // console.log('teste cor')
}

const turnOn = { //funcoes p/ cada um 'ligar' o semaforo escolhido
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => setInterval(changeColor, 1000) //seta o intervalo de 1 segundo para ficar 'ligando' as diferentes luzes do semaforo
}

buttons.addEventListener('click', trafficLight);
