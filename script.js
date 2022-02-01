//pegar os botoes e a img e armazenar na const;
const buttons = document.getElementById('buttons');
const img = document.getElementById('img');
let colorIndex = 0;
let intervalTime = null;

const stopAutomatic = () =>{
    clearInterval(intervalTime);   
}

const trafficLight = (event) => {
    // console.log(event.target.id) //procura o id correspondente e exibe na tela;
    stopAutomatic();
    turnOn[event.target.id]();  
};

//funcao pra verificar qual é a posicao do vetor e mudar de posicao de acordo
const nextIndex = () =>{
    if(colorIndex < 2){
        colorIndex++
    }
    else{
        colorIndex = 0
    }
}

const changeColor = () =>{
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const turnOn = { //'ligar' cada semaforo em sua respectiva funcao;
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalTime =  setInterval(changeColor, 1000),
};


//evento de click na const buttons para executar as funcoes de 'ligar' o semaforo
buttons.addEventListener('click', trafficLight);