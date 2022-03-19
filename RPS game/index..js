const listCharacterSRC = ["https://raw.githubusercontent.com/reiinakano/tfjs-rock-paper-scissors/master/images/scissors.png", "https://raw.githubusercontent.com/reiinakano/tfjs-rock-paper-scissors/master/images/rock.png", "https://raw.githubusercontent.com/reiinakano/tfjs-rock-paper-scissors/master/images/paper.png"];

function getCharater(event){
    const img = event.childNodes[1].childNodes[1].getAttribute("src")
    document.getElementById("loading").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("loading").style.visibility = "hidden";     
        youCharacter(img);
        (async function ChekWinner(){
            computerCharacter();
            const human = await document.getElementById("you").style.backgroundImage;
            const computer = await document.getElementById("computer").style.backgroundImage;
            let youWin = "<h5>&#128526;&nbsp; YOU WIN!!! &nbsp;&#128526;</h5>";
            let youLose = "<h5>&#129322;&nbsp; YOU LOSE!!! &nbsp;&#129322;</h5>";

            if((human) == (computer)){
                document.getElementById("result").innerHTML = "<h5>&#128528;&nbsp; DRAW &nbsp;&#128528;</h5>"; // draw
            }// You character is Paper
            else if((human == `url("${listCharacterSRC[2]}")`) && (computer == `url("${listCharacterSRC[1]}")`)){
                document.getElementById("result").innerHTML = youWin;
            }
            else if((human == `url("${listCharacterSRC[2]}")`) && (computer == `url("${listCharacterSRC[0]}")`)){
                document.getElementById("result").innerHTML = youLose;
            }// You character is Rock
            else if((human == `url("${listCharacterSRC[1]}")`) && (computer == `url("${listCharacterSRC[2]}")`)){
                document.getElementById("result").innerHTML = youLose;
            }
            else if((human == `url("${listCharacterSRC[1]}")`) && (computer == `url("${listCharacterSRC[0]}")`)){
                document.getElementById("result").innerHTML = youWin;
            }// You character is Scissors
            else if((human == `url("${listCharacterSRC[0]}")`) && (computer == `url("${listCharacterSRC[1]}")`)){
                document.getElementById("result").innerHTML = youLose;
            }
            else if((human == `url("${listCharacterSRC[0]}")`) && (computer == `url("${listCharacterSRC[2]}")`)){
                document.getElementById("result").innerHTML = youWin;
            }
        })()
    }, 1000);
}

function youCharacter(img){
    document.getElementById("you").style.background = `url(${img})`;
    document.getElementById("you").style.backgroundSize = "contain";
    document.getElementById("you").style.backgroundRepeat = "no-repeat";
    if(img == "https://raw.githubusercontent.com/reiinakano/tfjs-rock-paper-scissors/master/images/rock.png"){
        document.getElementById("you").style.transform = "scaleX(-1)";
    }else{
        document.getElementById("you").style.transform = "scaleX(1)";
    }
}

// random computerCharactear
var randomIndex = Math.floor(Math.random() * (2-0+1));

function computerCharacter(){
    if(randomIndex == 2){
        randomIndex = 0
    }else if(randomIndex == 1){
        randomIndex = 2
    }else if(randomIndex == 0){
        randomIndex = 1
    }
    document.getElementById("computer").style.background = `url(${listCharacterSRC[randomIndex]})`;
    document.getElementById("computer").style.backgroundSize = "contain";
    document.getElementById("computer").style.backgroundRepeat = "no-repeat";
    if(listCharacterSRC[randomIndex] == listCharacterSRC[0] || listCharacterSRC[1]){
        document.getElementById("computer").style.transform = "scaleX(-1)";
    }
    if(document.getElementById("computer").style.backgroundImage == 'url("https://raw.githubusercontent.com/reiinakano/tfjs-rock-paper-scissors/master/images/rock.png")'){
        document.getElementById("computer").style.transform = "scaleX(1)";
    }
}
