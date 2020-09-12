

const game = () => {
    let pScore = document.querySelector('.player-score');
    let cScore = document.querySelector('#cscore');
    const congrats =document.querySelector('.congrats');
    pScore = 0;
    cScore = 0;
    const display = document.querySelector('.chose');
    const rollBtn = document.querySelector('.dice-x');
    const match = document.querySelector('.match');
    const introScreen = document.querySelector('.intro');
    const failure=document.querySelector('.failure');




    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }

    const selectOption = () => {
        const options = document.querySelectorAll('.box');
        options.forEach(option => {
            option.addEventListener('click', function (e) {
                    // option.classList.toggle('border');
                    display.innerText = `You choosen ${option.innerText}`;
                    rollDice(option);
                
                
            })

        })
        const rollDice = (option) => {
            let diceNr, rollTxt,roller;
            const stopper=document.querySelector('.btn');
            rollBtn.addEventListener('click', function () {
               roller= setInterval(() => {
                    // rollBtn.style.animation = "shakePlayer 2s ease";
                    const diceOptions = ["A", "B", "C", "D"];
                    diceNr = Math.floor(Math.random() * 4);
                    rollTxt = diceOptions[diceNr];
                    rollBtn.src = './img/dice-' + diceNr + '.png';
                }, 20);
                
               
           
            stopper.addEventListener('click',function(e){
                clearInterval(roller);
                
                optionTxt = option.innerText;
                console.log(rollTxt,optionTxt);
                if (optionTxt === rollTxt) {
                    match.classList.remove('fadeIn');
                    congrats.classList.add('smfadeIn');
                    // txtWinner.classList.add('fadeIn');
                    // txtLoser.classList.add('fadeOut');
                } else {
                    match.classList.remove('fadeIn');
                    failure.classList.add('smfadeIn');
                    // txtWinner.classList.add('fadeOut');
                    // txtLoser.classList.add('fadeIn');
                }
                
            })
                
            
            })
        

    }
   

        // location.reload();
        return;
    }


    startGame();
    selectOption();
   
    return;
}
game();