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
    if (win.innerHTML == 'Level 1') {
        // let count = 0
        // while (count < 5) {
        //     pattern[count] = index = Math.floor(Math.random() * 9)
        //     x = document.querySelector('.n1')
        //     // log2.innerHTML += x
        //     // playPattern(index)

        //     var intervalId = setInterval(function() {
        //         container.children[index].style.backgroundColor= "red";
        //       }, 2000);

        //       setTimeout(function() {
        //         clearInterval(intervalId);
        //       }, 10000);

        //     // setTimeout(function () {
        //     //     container.children[index].style.backgroundColor = "yellow"
        //     // }, 2000);


        //     count++
        // }
        var count = 0;
        var container = document.querySelector(".container");
        var intervalId = setInterval(function () {
            if (count >= 5) {
                clearInterval(intervalId);
                return;
            }
            
            pattern[count] = index = Math.floor(Math.random() * 9)
            log1.innerHTML += pattern[count]
            container.children[index].style.backgroundColor = "red";
            // container.children[index].style.backgroundColor = "white";
            count++;
            // log1.innerHTML += pattern[index]

        }, 1000);
    }
    pattern.forEach(x => log1.innerHTML += x)

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // async function playPattern() {
    //     console.log("Hello");
    //     await sleep(2000);
    //     console.log("World!");
    //     await sleep(2000);
    //     console.log("Goodbye!");
    // }
    function playPattern(index) {
        setTimeout(function () {
            container.children[index].style.backgroundColor = "red"
        }, 2000);
        return
    }

}


container.addEventListener('click', match)

function match(e) {

}
startGame()