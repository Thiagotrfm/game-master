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
categories.push(new Category('Artes', 'artes.png'));
categories.push(new Category('Cotidiano', 'cotidiano.png'));
categories.push(new Category('Ciencias', 'ciencias.png'));
categories.push(new Category('Entretenimento', 'entretenimento.png'));
categories.push(new Category('Esportes', 'esportes.png'));
categories.push(new Category('Historia', 'historia.png'));
categories.push(new Category('Geografia', 'geografia.png'));
categories.push(new Category('Historia Natural', 'historianatural.png'));
categories.push(new Category('Variedades', 'variedades.png'));

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
    activeCategory = categories[Math.floor(Math.random() * 8.4)];
    console.log(activeCategory.image);
    document.querySelector('#beginImage').src = activeCategory.image;
    document.querySelector('.beginImage').classList.remove('player-name');
    document.querySelector('.titulo').textContent = activeCategory.name;
    document.querySelector('.subtitulo').textContent = 'vez de ' + players[activePlayer].name;
    document.querySelector('.btn-roll').style.display = 'none';
}

document.querySelector('.newButton').addEventListener('click', newGame);
document.querySelector('.btn-roll').addEventListener('click', rollDice);