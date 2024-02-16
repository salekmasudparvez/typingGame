// function play(){
//     const homeSection = document.getElementById("home");
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('playground');
//     playGround.classList.remove('hidden')
// }

function playerPresssHandaler(event){
    const pressKey = event.key;
    const requirdKey = document.getElementById('display').innerText.toLowerCase();
    if(pressKey === "Escape"){
        gameOver()
    }
    if(pressKey === requirdKey){
        const getCurrentScore = convertInt('score');
        const updateScore = getCurrentScore + 1;
        setValue('score', updateScore)
        removeKeyWordBg(requirdKey)
        continueGame();
    }else{
        const getLifeNumber = convertInt('life');
        const updateLifeNumber = getLifeNumber - 1;
        setValue('life' , updateLifeNumber)
        if(updateLifeNumber < 0){
            gameOver();

        }
    }

   
}
function gameOver(){
    const requirdKey = document.getElementById('display').innerText.toLowerCase();
    hideElementById('playground');
    showElementById('gameScore');
    const getCurrentGameScore = convertInt('score');
    setValue('gameOverScore', getCurrentGameScore)
    removeKeyWordBg(requirdKey);
}
function playAgain(){
    document.getElementById('playAgain').addEventListener('click', play);
    document.getElementById('score').innerText = 0;
    document.getElementById('life').innerText = 5;
}
document.addEventListener('keyup', playerPresssHandaler)

function continueGame() {
    const alphabet = getAlphabet();
    document.getElementById('display').innerText =alphabet;
    addKeyWordBg(alphabet.toLowerCase());
}


function play(){
    hideElementById('home');
    showElementById('playground');
    continueGame();
}
