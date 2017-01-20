var activeGame = false, numberOfPlayers, players, finalPoint, activePlayer = 0, activeCategory;

function Category(name, image){
    this.name = name;
    this.image = image;
}

function Player(name, score){
    this.name = name;
    this.score = score;
}

var categories = new Array();
categories.push(new Category('Artes', 'artes.jgp'));
categories.push(new Category('Cotidiano', 'cotidiano.jpg'));
categories.push(new Category('Ciencias', 'ciencias.jpg'));
categories.push(new Category('Entretenimento', 'entretenimento.jpg'));
categories.push(new Category('Esportes', 'esportes.jpg'));
categories.push(new Category('Historia', 'historia.jpg'));
categories.push(new Category('Geografia', 'geografia.jpg'));
categories.push(new Category('Historia Natural', 'historianatural.jpg'));
categories.push(new Category('Variedades', 'variedades.jpg'));

console.log(categories);

function checkPlayers(i){
    var name = prompt('Nome do player ' + (i+1) + ': ');
    players.push(new Player(name, 0));
    document.querySelector('#name-'+i).classList.remove('player-name');
    document.querySelector('#name-'+i).classList.add('player-name-active');
    document.querySelector('#name-'+i).textContent = name;
    document.querySelector('#score-'+i).classList.remove('player-score');
    document.querySelector('#score-'+i).classList.add('player-score-active');
    document.querySelector('#score-'+i).textContent = 0;
}

function newGame(){
    numberOfPlayers = prompt('Digite o número de jogadores: ');
    finalPoint = prompt('Digite o número de pontos que deve ser conquistado: ');
    players = [];
    activeGame = true;
    document.querySelector('.newButton').classList.add('activeGame');
    document.querySelector('.btn-roll').classList.remove('btn-roll-unactive');
    for(var i=0; i<numberOfPlayers; i++){
        checkPlayers(i);
    }
    document.querySelector('#name-0').classList.remove('player-name-active');
    document.querySelector('#name-0').classList.add('player-name-act');
    document.querySelector('.beginImage').classList.add('player-name');
    console.log(players);
}

function rollDice(){
    activeCategory = categories[Math.floor(Math.random() * 9.4)];
}

document.querySelector('.newButton').addEventListener('click', newGame);