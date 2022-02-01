//pegar os botoes e a img e armazenar na const;
const buttons = document.getElementById('buttons');
const img = document.getElementById('img');

const trafficLight = (event) => {
    // console.log(event.target.id) //procura o id correspondente e exibe na tela;
    turnOn[event.target.id]();
}

const turnOn = { //'ligar' cada semaforo em sua respectiva funcao;
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
}


//evento de click na const buttons para executar as funcoes de 'ligar' o semaforo
buttons.addEventListener('click', trafficLight);