var p1p = document.querySelector('.p1p')
var p2p = document.querySelector('.p2p')
var p1D = document.querySelector('.p1Div')
var p2D = document.querySelector('.p2Div')
var points = 0
var p1points = 0
var p2points = 0
var log1 = document.querySelector('.log1')
var log2 = document.querySelector('.log2')
var win = document.querySelector('.winner')
var container = document.querySelector('.container')
var go = document.querySelector('.go')
var pattern = []
var copyPattern = []
var playerTurn = 2
var round = 2


function startGame() {
    // log2.innerHTML = 'helloz'
    if(playerTurn == 2){
        playerTurn = 1
        p1D.style.borderColor = "green"
        p2D.style.borderColor = "white"
    }else{
        playerTurn = 2
        p2D.style.borderColor = "green"
        p1D.style.borderColor = "white"
    }
    log1.innerHTML = ''
    win.innerHTML = "Level 1"
    if (win.innerHTML == 'Level 1') {
        pattern = []
        copyPattern = []
        go.innerHTML = ''
        playPattern()
        async function playPattern() {
            // container.children[0].style.backgroundColor = "white"
            let count = 0
            if(p1points >= 3 || p2points >= 3){
                win.innerHTML = "Level 2"
                round = 3
            }else if(p1points >= 10 || p2points >= 10){
                win.innerHTML = "Level 3"
                round = 5
            }else if(p1points >= 15 || p2points >= 15){
                win.innerHTML = "Level 4"
                round = 6
            }
            while (count < round) {
                pattern[count] = index = Math.floor(Math.random() * 9)
                await sleep(800);
                container.children[index].style.backgroundColor = "red"
                await sleep(800);
                container.children[index].style.backgroundColor = "white"
                await sleep(800);
                log1.innerHTML += index
                count++
            }
            await sleep(500);
            go.style.backgroundColor = "red"
            await sleep(500);
            go.style.backgroundColor = "white"
            await sleep(500);
            go.style.backgroundColor = "yellow"
            await sleep(500);
            go.style.backgroundColor = "white"
            await sleep(500);
            go.style.backgroundColor = "green"
            await sleep(500);
            go.style.backgroundColor = "white"
            await sleep(500);
            go.innerHTML = 'GO'
            await sleep(5000);
            await checkPattern()
            startGame()
        }
        
    }

    // pattern.forEach(x => log2.innerHTML += x)

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}


container.addEventListener('click', match)

function match(e) {
    if (e.target.classList.contains('box')) {
        // p1p.innerHTML = p1points

        let str = e.target.className
        var num = parseInt(str.split("n")[1])
        // log2.innerHTML = num
        copyPattern.push(num)
        log2.innerHTML = pattern
        win.innerHTML = copyPattern

        // if (copyPattern.length == pattern.length) {
        //     for (let i = 0; i < pattern.length; i++) {
        //         pattern[i] == copyPattern[i] ? p1points += 1 : win.innerHTML = 'bad'
        //     }
        // }


        // win.innerHTML = 'good'

        console.log(pattern)
        console.log(copyPattern)
        console.log(pattern[2] == copyPattern[2])
        // log2.innerHTML = copyPattern
        // copyPattern.forEach(x => log2.innerHTML += x)
    }
}

function checkPattern(){
    points = 0
    if (copyPattern.length == pattern.length) {
        for (let i = 0; i < pattern.length; i++) {
            pattern[i] == copyPattern[i] ? points += 1 : win.innerHTML = 'bad'
        }
    }
    if(playerTurn == 1){
        p1points += points
        p1p.innerHTML = p1points
    }else{
        p2points += points
        p2p.innerHTML = p2points
    }
    
    
}

startGame()