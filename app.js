var p1p = document.querySelector('.p1p')
var p2p = document.querySelector('.p2p')
var log1 = document.querySelector('.log1')
var log2 = document.querySelector('.log2')
var win = document.querySelector('.winner')
var container = document.querySelector('.container')
var pattern = []
var copyPattern = []




function startGame() {
    // log2.innerHTML = 'helloz'
    win.innerHTML = "Level 1"
    if (win.innerHTML == 'Level 1') {
        pattern = []
        copyPattern = []
        playPattern()
        async function playPattern() {
            // container.children[0].style.backgroundColor = "white"
            let count = 0
            while (count < 5) {
                pattern[count] = index = Math.floor(Math.random() * 9)
                await sleep(800);
                container.children[index].style.backgroundColor = "red"
                await sleep(800);
                container.children[index].style.backgroundColor = "white"
                await sleep(800);
                log1.innerHTML += index
                count++
            }

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


        let str = e.target.className
        var num = parseInt(str.split("n")[1])
        // log2.innerHTML = num
        copyPattern.push(num)
        log2.innerHTML = pattern
        win.innerHTML = copyPattern

        if (copyPattern.length == pattern.length) {
            for (let i = 0; i < pattern.length; i++) {
                pattern[i] == copyPattern[i] ? win.innerHTML = 'good' : win.innerHTML = 'bad'
            }
        }


        // win.innerHTML = 'good'

        console.log(pattern)
        console.log(copyPattern)
        console.log(pattern[0] == copyPattern[0])
        // log2.innerHTML = copyPattern
        // copyPattern.forEach(x => log2.innerHTML += x)
    }
}
startGame()