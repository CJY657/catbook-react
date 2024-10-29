// TODO 1.1: Create the snake
const SnakeBody = [
  {x : 11, y : 11},
  {x : 11, y : 10},
  {x : 11, y : 9}
]; 
// TODO 1.2: Create a function that updates the snake
const SnakeUpdate = () => {
  SnakeBody.pop();

  const newHead = {...SnakeBody[0]};

  newHead.x += 0;
  newHead.y += 1;

  SnakeBody.unshift();

}
// Hint: Search for the documentation for the Array pop() and unshift() methods
// in the MDN docs.

// Don't change this function!
const drawSnake = (gameBoard) => {
  for (let i = 0; i < snakeBody.length; i++) {
    const segment = snakeBody[i];
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  }
};
