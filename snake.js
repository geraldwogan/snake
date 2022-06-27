export const SNAKE_SPEED = 2 // how many times the snake moves per second

// x: 11, y: 11 is center of board
const snakeBody = [
    {x: 10, y: 11},
    {x: 11, y: 11},
    {x: 12, y: 11}
] 

export function update(){
    // console.log('update snake')
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = { ...snakeBody[i]}
    }

    snakeBody[0].x += 0
    snakeBody[0].y += 1
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}