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
var waitSound = new soundOnly("b2.mp3")
var waitSound2 = new soundOnly("go.mp3")
waitSound.play()
waitSound2.play()
function startGame() {
    // log2.innerHTML = 'helloz'
    if (playerTurn == 2) {
        playerTurn = 1
        p1D.style.borderColor = "green"
        p2D.style.borderColor = "white"
    } else {
        playerTurn = 2
        p2D.style.borderColor = "green"
        p1D.style.borderColor = "white"
    }
    // log1.innerHTML = ''
    win.innerHTML = "Level 1"
    if (win.innerHTML == 'Level 1') {
        pattern = []
        copyPattern = []
        go.innerHTML = ''
        playPattern()
        async function playPattern() {
            // container.children[0].style.backgroundColor = "white"
            let count = 0
            if (p1points >= 25 || p2points >= 25) {
                win.innerHTML = "Level 5"
                round = 6
            } else if (p1points >= 15 || p2points >= 15) {
                win.innerHTML = "Level 4"
                round = 5
            } else if (p1points >= 10 || p2points >= 10) {
                win.innerHTML = "Level 3"
                round = 4
            } else if (p1points >= 3 || p2points >= 3) {
                win.innerHTML = "Level 2"
                round = 3
            }
            while (count < round) {
                pattern[count] = index = Math.floor(Math.random() * 9)
                await sleep(800);
                container.children[index].style.backgroundColor = "red"
                container.children[index].style.color = "white"
                container.children[index].innerHTML = (count + 1)
                await sleep(800);
                container.children[index].innerHTML = ''
                container.children[index].style.color = ""
                container.children[index].style.backgroundColor = ""
                await sleep(800);
                // log1.innerHTML += index
                count++
            }
            await sleep(400);
            s2.play()
            go.innerHTML = "Ready"
            go.style.backgroundColor = "red"
            await sleep(400);
            go.style.backgroundColor = ""
            await sleep(400);
            s2.play()
            go.innerHTML = "Set"
            go.style.backgroundColor = "yellow"
            await sleep(400);
            go.style.backgroundColor = ""
            await sleep(300);
            s3.play()
            await sleep(100);
            go.innerHTML = 'GO'
            go.style.backgroundColor = "green"
            await sleep(400);
            go.innerHTML = ''
            go.style.backgroundColor = ""
            await sleep(5000);
            
            for (let i = 0; i < container.children.length; i++) {
                container.children[i].style.backgroundColor = ''
            }

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
        // for(let i = 0; i < container.children.length; i++){
        //     container.children[i].style.backgroundColor = '' 
        // }
        e.target.style.backgroundColor = "red"
        let str = e.target.className
        var num = parseInt(str.split("n")[1])
        // log2.innerHTML = num
        copyPattern.push(num)
        // log2.innerHTML = pattern
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

function checkPattern() {
    points = 0
    if (copyPattern.length == pattern.length) {
        for (let i = 0; i < pattern.length; i++) {
            pattern[i] == copyPattern[i] ? points += 1 : win.innerHTML = 'bad'
        }

    }
    if (playerTurn == 1) {
        p1points += points
        p1p.innerHTML = p1points
    } else {
        p2points += points
        p2p.innerHTML = p2points
    }

    JSON.stringify(pattern) === JSON.stringify(copyPattern) ? correct.play() : null
}

function soundOnly(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    // this.sound.volume = .1
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}
const s3 = new Audio('go.wav');
const s2 = new Audio('beep.mp3');
const s1 = new Audio('bg2.mp3');
const correct = new Audio('correct.mp3');
// audioElement.play();

go.style.color = "Red"
go.innerHTML = 'Watch Pattern. Copy Pattern.'
var btn = document.querySelector('button')
var btnReset = document.querySelector('.btnReset')
btnReset.style.display = 'none'

btn.addEventListener('click', start)

function start() {
    go.innerHTML = ''
    go.style.color = 'white'
    s1.volume = 0.2
    s1.play()
    // waitSound2.play()
    btn.style.display = 'none'
    btnReset.style.display = ''
    startGame()
}

btnReset.addEventListener('click', reset)
function reset() {
    location.reload()
}