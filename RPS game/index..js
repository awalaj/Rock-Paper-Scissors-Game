const btn = document.querySelectorAll("button");

for(let i = 0; i < btn.length; i++){
    document.getElementsByTagName("button")[i].addEventListener("click", function(event){
        document.getElementById("loading").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("loading").style.visibility = "hidden";     
            youCharacter(event);
            (async function ChekWinner(){
                computerCharacter();
                const human = await document.getElementById("you").style.backgroundImage;
                const computer = await document.getElementById("computer").style.backgroundImage;
                if((human) == (computer)){
                    document.getElementById("result").innerHTML = "<h5>&#128528;&nbsp; DRAW &nbsp;&#128528;</h5>"
                }else if(((human == 'url("./image/paper.png")') && (computer == 'url("./image/rock.png")')) || ((human == 'url("./image/rock.png")') && (computer == 'url("./image/scissors.png")')) || ((human == 'url("./image/scissors.png")') && (computer == 'url("./image/paper.png")'))){
                    document.getElementById("result").innerHTML = "<h5>&#128526;&nbsp; You WIN!!! &nbsp;&#128526;</h5>"
                }else if(((human == 'url("./image/paper.png")') && (computer == 'url("./image/scissors.png")')) || ((human == 'url("./image/rock.png")') && (computer == 'url("./image/paper.png")')) || ((human ==  'url("./image/scissors.png")') && (computer == 'url("./image/rock.png")'))){
                    document.getElementById("result").innerHTML = "<h5>&#129322;&nbsp; You LOSE!!! &nbsp;&#129322;</h5>"
                }
            })()
        }, 1000);
    })
}

function youCharacter(event){
    document.getElementById("you").style.background = `url(${event.target.getAttribute("src")})`;
    document.getElementById("you").style.backgroundSize = "contain";
    document.getElementById("you").style.backgroundRepeat = "no-repeat";
    if(event.target.getAttribute("src") == "./image/rock.png"){
        document.getElementById("you").style.transform = "scaleX(-1)";
    }else{
        document.getElementById("you").style.transform = "scaleX(1)";
    }
}

// random computerCharactear
const listCharacterSRC = ['scissors', 'rock', 'paper'];
var randomIndex = Math.floor(Math.random() * (2-0+1));//listCharacterSRC[Math.floor(Math.random() * listCharacterSRC.length)]//;

function computerCharacter(){
    if(randomIndex == 2){
        randomIndex = 0
    }else if(randomIndex == 1){
        randomIndex = 2
    }else if(randomIndex == 0){
        randomIndex = 1
    }
    document.getElementById("computer").style.background = `url('./image/${listCharacterSRC[randomIndex]}.png')`;
    document.getElementById("computer").style.backgroundSize = "contain";
    document.getElementById("computer").style.backgroundRepeat = "no-repeat";
    if(listCharacterSRC[randomIndex] == "scissors" || "paper"){
        document.getElementById("computer").style.transform = "scaleX(-1)";
    }
    if(document.getElementById("computer").style.backgroundImage == 'url("./image/rock.png")'){
        document.getElementById("computer").style.transform = "scaleX(1)";
    }
}