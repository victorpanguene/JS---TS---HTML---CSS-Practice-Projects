const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const startCells = ['', '', '', '', '', '', '', '', '', ]

const createBoards = () => { 
 startCells.forEach((cell, index) => {
  const cellElement = document.createElement('div')
  gameBoard.append(cellElement)
  cellElement.classList.add('square')
  const circleElement = document.createElement('div')
  circleElement.classList.add('circle')
  cellElement.append(circleElement)
  gameBoard.append(cellElement)
 })
}

createBoards() 