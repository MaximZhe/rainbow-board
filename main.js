
"use strict"

const board = document.querySelector("#board");
const SQUARES_NUM = 300;

const COLORS = ["blues", "greens", "reds", "whites"];
for(let i = 0; i < SQUARES_NUM; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    
    //Наведение на элемент доски
    square.addEventListener("mouseover", () => {
    activeColorSquare(square);
    
    });
    //Убираем с элемента доски
    square.addEventListener("mouseleave", () => {
        removeColorSquare(square);
        
    });
    board.append(square);
}
//Добавляем случайный цвет при наведении
function activeColorSquare (el) {
    el.classList.add(COLORS [Math.floor(Math.random() * COLORS.length)]);
}
//Удаляем случайнй цвет
function removeColorSquare (el) {
    el.classList.remove("blues", "greens", "reds", "whites");
}