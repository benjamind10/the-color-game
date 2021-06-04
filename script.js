// Global Variables
var numberOfSquares = 6;
var clickedColor = "";
var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square'); 
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var spanMsg = document.querySelector('#message');
var mainTitle = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var diffButton = document.querySelectorAll('.diff')

colorDisplay.textContent = pickedColor.toUpperCase();
resetButton.addEventListener("click", gameReset);

init();

// Functions
function init() {
    for (var i = 0; i < diffButton.length; i++) {
        diffButton[i].addEventListener("click",setupButton);
    }
    setupSquares(); 
}

function setupButton() {
    for(var i = 0; i < diffButton.length; i++) {
        diffButton[i].classList.remove("selected");
    }
    this.classList.add("selected");
    this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
    gameReset();
}

function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click', function() {
            clickedColor = this.style.backgroundColor;

            if(clickedColor !== pickedColor) {
                this.style.backgroundColor = "#232323";
                spanMsg.textContent = "Try again!";
            }
            else {
                spanMsg.textContent = "You are correct!";
                mainTitle.style.backgroundColor = this.style.backgroundColor;
                changeColors(pickedColor);
                resetButton.textContent = "Play Again?";
            }
        })
    } 
}

function changeColors(color1) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color1;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var colorString = "rgb(" + r + ", " + g + ", " + b +")" ;
    return colorString;

}

function generateRandomColors(length) {
    var colors = [];
    for (var i = 0; i < length; i++) {
        colors.push(randomColor());
    }
    return colors;
}

function gameReset() {
    colors = generateRandomColors(numberOfSquares);
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        if(!colors[i]) {
            squares[i].style.backgroundColor = "#232323";
        }
    }
    pickedColor = pickColor();
    spanMsg.textContent = "";
    resetButton.textContent = "New Colors";
    mainTitle.style.backgroundColor = "steelblue";
    colorDisplay.textContent = pickedColor;
}
