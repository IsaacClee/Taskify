//////////////////DOM EVENTS//////////////////////////////

// MENU EVENTS
const main = document.getElementById("main");
const startMenu = document.getElementById("gameStartMenu");
const lvlOne = document.getElementById("episodeOne");
const lvlTwo = document.getElementById("episodeTwo");
const lvlThree = document.getElementById("episodeThree");
const oneStart = document.getElementById("episodeOneStart");
const twoStart = document.getElementById("episodeTwoStart");
const threeStart = document.getElementById("episodeThreeStart");
const intro = document.querySelectorAll('.intro');
const combat = document.getElementById('combat');
const active = document.getElementById('active');
const textbox = document.querySelectorAll('.textbox');
const gameInstructions = document.getElementById('gameInstructions');
const infoBtn = document.querySelector('.infoBtn');
const defeat = document.getElementById('defeat');
const victory = document.getElementById('victory');

//GAME EVENTS
const foeHP = document.getElementById("hpBar");
const foeFP = document.getElementById("fpBar");
const profile = document.getElementById('profile');
const healthBox = document.getElementById('health');
const cardSlot = document.querySelectorAll('.cardSlot');

///////////////////////////////////////////////////////////

//GLOBAL VAR DECLARATIONS

let currentLevel = 0;
let playerHP = 100;
let HP = 0;
let HPmax = 50;
let FP = 0;
let FPmax = 50;
let foeAttack = 10;
let damageReduction = 0;
let cardsPlayed = 0;
let combatBackdrops = [
    'images/killer1.jpg',
    'images/killer2.jpg',
    'images/cult2.jpg',
    'images/cult1.jpg',
    'images/keeper1.jpg',
    'images/keeper2.jpg',
    'images/attack.jpg'
];
let backNum = 0;

let deck = [
    '<div class="card" data-FP="5" data-HP="0"><div class="value">5 FORCE</div><div class="value">0 HOLY</div><img src="/images/shotgun.png" alt="card"><div class="cardName">Shotgun</div></div>',
    '<div class="card" data-FP="4" data-HP="0"><div class="value">4 FORCE</div><div class="value">0 HOLY</div><img src="/images/shotgun.png" alt="card"><div class="cardName">Shotgun</div></div>',
    '<div class="card" data-FP="6" data-HP="0"><div class="value">6 FORCE</div><div class="value">0 HOLY</div><img src="/images/shotgun.png" alt="card"><div class="cardName">Shotgun</div></div>',
    '<div class="card" data-FP="4" data-HP="0"><div class="value">4 FORCE</div><div class="value">0 HOLY</div><img src="/images/shotgun.png" alt="card"><div class="cardName">Shotgun</div></div>',
    '<div class="card" data-FP="1" data-HP="3"><div class="value">1 FORCE</div><div class="value">3 HOLY</div><img src="/images/holy.png" alt="card"><div class="cardName">Holy Water</div></div>',
    '<div class="card" data-FP="1" data-HP="2"><div class="value">1 FORCE</div><div class="value">2 HOLY</div><img src="/images/holy.png" alt="card"><div class="cardName">Holy Water</div></div>',
    '<div class="card" data-FP="1" data-HP="3"><div class="value">1 FORCE</div><div class="value">3 HOLY</div><img src="/images/holy.png" alt="card"><div class="cardName">Holy Water</div></div>',
    '<div class="card" data-FP="1" data-HP="2"><div class="value">1 FORCE</div><div class="value">2 HOLY</div><img src="/images/holy.png" alt="card"><div class="cardName">Holy Water</div></div>',
    '<div class="card" data-FP="0" data-HP="5"><div class="value">0 FORCE</div><div class="value">5 HOLY</div><img src="/images/bible.png" alt="card"><div class="cardName">Scripture<div></div>',
    '<div class="card" data-FP="0" data-HP="3"><div class="value">0 FORCE</div><div class="value">3 HOLY</div><img src="/images/bible.png" alt="card"><div class="cardName">Scripture</div></div>',
    '<div class="card" data-FP="0" data-HP="5"><div class="value">0 FORCE</div><div class="value">5 HOLY</div><img src="/images/bible.png" alt="card"><div class="cardName">Scripture<div></div>',
    '<div class="card" data-FP="0" data-HP="4"><div class="value">0 FORCE</div><div class="value">4 HOLY</div><img src="/images/bible.png" alt="card"><div class="cardName">Scripture</div></div>',
    '<div class="card" data-FP="5" data-HP="5"><div class="value">5 FORCE</div><div class="value">5 HOLY</div><img src="/images/pistol.png" alt="card"><div class="cardName">Silverbullet</div></div>',
    '<div class="card" data-FP="5" data-HP="5"><div class="value">5 FORCE</div><div class="value">5 HOLY</div><img src="/images/pistol.png" alt="card"><div class="cardName">Silverbullet</div></div>',
    '<div class="card" data-FP="1" data-HP="2"><div class="value">1 FORCE</div><div class="value">2 HOLY</div><img src="/images/kick.png" alt="card"><div class="cardName">Kick</div></div>',
    '<div class="card" data-FP="1" data-HP="1"><div class="value">1 FORCE</div><div class="value">1 HOLY</div><img src="/images/kick.png" alt="card"><div class="cardName">Kick</div></div>',
    '<div class="card" data-FP="1" data-HP="2"><div class="value">1 FORCE</div><div class="value">2 HOLY</div><img src="/images/kick.png" alt="card"><div class="cardName">Kick</div></div>',
    '<div class="card" data-FP="2" data-HP="1"><div class="value">2 FORCE</div><div class="value">1 HOLY</div><img src="/images/kick.png" alt="card"><div class="cardName">Kick</div></div>',
    '<div class="card" data-FP="1" data-HP="2"><div class="value">1 FORCE</div><div class="value">2 HOLY</div><img src="/images/kick.png" alt="card"><div class="cardName">Kick</div></div>',
    '<div class="card" data-FP="1" data-HP="2"><div class="value">1 FORCE</div><div class="value">2 HOLY</div><img src="/images/kick.png" alt="card"><div class="cardName">Kick</div></div>',
    '<div class="card" data-FP="3" data-HP="1"><div class="value">3 FORCE</div><div class="value">1 HOLY</div><img src="/images/cross.png" alt="card"><div class="cardName">Cross</div></div>',
    '<div class="card" data-FP="2" data-HP="2"><div class="value">2 FORCE</div><div class="value">2 HOLY</div><img src="/images/cross.png" alt="card"><div class="cardName">Cross</div></div>',
    '<div class="card" data-FP="3" data-HP="1"><div class="value">3 FORCE</div><div class="value">1 HOLY</div><img src="/images/cross.png" alt="card"><div class="cardName">Cross</div></div>',
    '<div class="card" data-FP="2" data-HP="2"><div class="value">2 FORCE</div><div class="value">2 HOLY</div><img src="/images/cross.png" alt="card"><div class="cardName">Cross</div></div>',
    '<div class="card" data-FP="0" data-HP="0" data-special="dodge"><div class="value"></div><div class="value"></div><img src="/images/dodge.png" alt="card"><div class="cardName">Dodge</div></div>',
    '<div class="card" data-FP="0" data-HP="0" data-special="dodge"><div class="value"></div><div class="value"></div><img src="/images/dodge.png" alt="card"><div class="cardName">Dodge</div></div>',
    '<div class="card" data-FP="0" data-HP="0" data-special="dodge"><div class="value"></div><div class="value"></div><img src="/images/dodge.png" alt="card"><div class="cardName">Dodge</div></div>',
    '<div class="card" data-FP="0" data-HP="0" data-special="dodge"><div class="value"></div><div class="value"></div><img src="/images/dodge.png" alt="card"><div class="cardName">Dodge</div></div>',
    '<div class="card" data-FP="0" data-HP="0" data-special="dodge"><div class="value"></div><div class="value"></div><img src="/images/dodge.png" alt="card"><div class="cardName">Dodge</div></div>',
    '<div class="card" data-FP="0" data-HP="0" data-special="dodge"><div class="value"></div><div class="value"></div><img src="/images/dodge.png" alt="card"><div class="cardName">Dodge</div></div>',
    '<div class="card" data-FP="0" data-HP="0" data-special="dodge"><div class="value"></div><div class="value"></div><img src="/images/dodge.png" alt="card"><div class="cardName">Dodge</div></div>',
    '<div class="card" data-FP="0" data-HP="0" data-special="dodge"><div class="value"></div><div class="value"></div><img src="/images/dodge.png" alt="card"><div class="cardName">Dodge</div></div>',
    '<div class="card" data-FP="0" data-HP="0" data-special="shuffle"><div class="value"></div><div class="value"></div><img src="/images/strategize.png" alt="card"><div class="cardName">Strategize</div></div>',
    '<div class="card" data-FP="0" data-HP="0" data-special="prayer"><div class="value"></div><div class="value"></div><img src="/images/prayer.png" alt="card"><div class="cardName">Prayer</div></div>',
    '<div class="card" data-FP="0" data-HP="0" data-special="inspect"><div class="value"></div><div class="value"></div><img src="/images/inspect.png" alt="card"><div class="cardName">Inspect</div></div>'
];





//MENU NAVIGAITON 

lvlOne.addEventListener('click', function(){
    startMenu.classList.toggle('hide');
    active.classList.toggle('hide');
    oneStart.classList.toggle('hide');
    currentLevel = 1;
    backNum = 0;
    HPmax = 50;
    FPmax = 50;
    foeAttack = 6;
});


lvlTwo.addEventListener('click', function(){
    startMenu.classList.toggle('hide');
    active.classList.toggle('hide');
    twoStart.classList.toggle('hide');
    currentLevel = 2;
    backNum = 2;
    HPmax = 70;
    FPmax = 25;
    foeAttack = 8;
});

lvlThree.addEventListener('click', function(){
    startMenu.classList.toggle('hide');
    active.classList.toggle('hide');    
    threeStart.classList.toggle('hide');
    currentLevel = 3;
    backNum = 4;
    HPmax = 0;
    FPmax = 100;
    foeAttack = 10;
});



//MOVE FROM INTRO TO ACTIVE GAME
textbox.forEach( element => element.addEventListener('click', function(){
    element.classList.toggle('hide');
    combat.classList.toggle('hide');
    combat.style.backgroundSize = "cover";
    profile.style.background = "url(images/desmond2.jpg) no-repeat";
    profile.style.backgroundSize = "cover";
    if (currentLevel === 1) {
        gameInstructions.classList.toggle('hide');
        oneStart.classList.toggle('hide'); 
    } else if (currentLevel === 2) {
        twoStart.classList.toggle('hide'); 
    } else if (currentLevel === 3) {
        threeStart.classList.toggle('hide'); 
    };
    setUp();
}));


//OPEN GAME INSTRUCTIONS ON BUTTON
infoBtn.addEventListener('click', function(){
    gameInstructions.classList.toggle('hide');
});

gameInstructions.addEventListener('click', function(){
    this.classList.toggle('hide');
});


//OPEN GAME END MENU AS NEEDED

defeat.addEventListener('click', function(){
    location.reload();
});

victory.addEventListener('click', function(){
    location.reload();
});


//////////////////GAME MECHANICS//////////////////////////////

//ACTIVE GAME COUNTERS

function counters(){
    healthBox.innerHTML = `${playerHP} / 100`;
    foeHP.style.height = (HPmax - HP ) + "%";
    if(HPmax - HP < 0) {
        foeHP.style.height = 0 + "%";
    }
    foeFP.style.height = (FPmax - FP ) + "%";
    if(FPmax - FP < 0) {
        foeFP.style.height = 0 + "%";
    }
};

//DEAL PLAYER CARDS 

function dealCards(){
    cardSlot.forEach( slot => slot.innerHTML = deck[randomCard(deck)]);
};

//ENEMY TURN
function enemyAttack() {
    cardSlot.forEach( slot => slot.innerHTML = '');
        combat.style.background = "url(" + combatBackdrops[backNum + 1] + ") no-repeat center bottom 30%";
    setTimeout(function(){
        combat.style.background = "url(" + combatBackdrops[6] + ") no-repeat center bottom 40%";
    }, 500);
    setTimeout(function(){
        combat.style.background = "url(" + combatBackdrops[backNum] + ") no-repeat center bottom 30%";
    }, 750);
    setTimeout(function(){
        profile.style.background = "url(images/attack.jpg) no-repeat center center";
        profile.style.backgroundSize = "cover";
        healthBox.style.background = "url(images/attack.jpg) no-repeat center center";
        healthBox.style.backgroundSize = "cover";
        playerHP -= foeAttack - damageReduction;
        damageReduction = 0;
        console.log(FP);
        console.log(FPmax)
        console.log(HP);
        console.log(HPmax)
        gameStatus();
        counters();
    }, 500);
    setTimeout(function(){
        profile.style.background = "url(images/desmond2.jpg) no-repeat";
        profile.style.backgroundSize = "cover";
        healthBox.style.background = `rgba(240, 255, 250, ${playerHP * 0.01})`;
        healthBox.style.backgroundSize = "cover";
    }, 750);
  }

//PLAYER SETUP // Needs edit
document.addEventListener('mousedown', function(e){ e.preventDefault(); }, false); //important

function setUp(){
    combat.style.background = "url(" + combatBackdrops[backNum] + ") no-repeat center bottom 30%";
    counters();
    dealCards();
}

//CHECK FOR GAME WIN OR LOSE
function gameStatus() {
    if(HP >= HPmax && FP >= FPmax){
        console.log("You won!");
        victory.classList.toggle('hide');
        active.classList.toggle('hide');
    }
    if(playerHP <= 0){
        defeat.classList.toggle('hide');
        active.classList.toggle('hide');
    }
}

//CREATE RANDOM CARD 
function randomCard (deck){
    num = Math.floor(Math.random() * deck.length)
    return num;
};

//PLAYER ACTIONS

//SELECT CARD - SINGLE CLICK 
cardSlot.forEach(element => element.addEventListener('click', function(){
    let selected = document.querySelectorAll('.selected');
    selected.forEach( selected => selected.classList.toggle('selected'));
    this.firstChild.classList.toggle('selected'); //shows selected card on DOM
}));


//PLAY CARD - DOUBLE CLICK
cardSlot.forEach(element => element.addEventListener('dblclick', function(){
    //COLLECT DAMAGE FROM CARD IN PLAY AND APPLY TO FOE VALUES
    let hpDam = this.firstChild.getAttribute("data-HP");
    HP += parseInt(hpDam);
    let fpDam = this.firstChild.getAttribute("data-FP");
    FP += parseInt(fpDam);
    //APPLY SPECIAL EFFECTS
    
    if(this.firstChild.getAttribute('data-special') == 'dodge'){
        damageReduction += foeAttack / 2;
        console.log(damageReduction);
    }
    if(this.firstChild.getAttribute('data-special') == 'prayer'){
        foeHP.classList.toggle('hide');
    }
    if(this.firstChild.getAttribute('data-special') == 'inspect'){
        foeFP.classList.toggle('hide');
    }
    if(this.firstChild.getAttribute('data-special') == 'shuffle'){
        cardSlot.forEach( slot => slot.innerHTML = deck[randomCard(deck)]);
    } 

    counters();
    gameStatus();

    //REMOVE CARD FROM PLAY THIS TURN
    let slotnumber = this.getAttribute("data-slotnumber");
    cardSlot[slotnumber].innerHTML = '';
    cardsPlayed += 1;
    if(cardsPlayed === 2){
        enemyAttack();
        dealCards();
        cardsPlayed = 0;
    }
    counters();

}));


