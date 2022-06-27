export const SNAKE_SPEED = 2 // how many times the snake moves per second

const snakeBody = [{x: 11, y: 11}] // x: 11, y: 11 is center of board

export function update(){
    // console.log('update snake')
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}