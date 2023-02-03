var p1p = document.querySelector('.p1p')
var p2p = document.querySelector('.p2p')
var log1 = document.querySelector('.log1')
var log2 = document.querySelector('.log2')
var win = document.querySelector('.winner')
var container = document.querySelector('.container')
var pattern = []
var copyPattern = []




function startGame() {
    // log2.innerHTML = 'hello'
    win.innerHTML = "Level 1"
    if(win.innerHTML == 'Level 1'){
        let count = 0
        while(count<5){
            pattern[count] = index = Math.floor(Math.random() * 9)
            document.querySelector(`n${counter}`).style.backgroundColor = "red"
            count++
        }
    }
    pattern.forEach(x => log1.innerHTML += x)  
    
}

container.addEventListener('click', match)

function match(e) {

}
startGame()