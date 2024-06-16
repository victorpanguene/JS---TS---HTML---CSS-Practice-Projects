const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const startCells = ['', '', '', '', '', '', '', '', '']
let go = 'circle'

// 

const createBoards = () => { 
 startCells.forEach((_cell, index) => {
  const cellElement = document.createElement('div')
  cellElement.classList.add('square')
  cellElement.id = index
 cellElement.addEventListener('click', addGo)
 gameBoard.append(cellElement)
})
  }
  createBoards() 
function addGo(e) {
  console.log('Please', e)
  const goDisplay = document.createElement('div')
  goDisplay.classList.add(go)
  e.target.append(goDisplay)
  go = go === 'circle' ? "cross" : 'circle'
  e.target.removeEventListener('click', addGo)
  // infoDisplay.textContent = "it is now " + go + "'s ßgo" 
}  

function checkScore() {
  const allSquares = document.querySelectorAll('.square')
  console.log("🚀 ~ checkScore ~ allSquares:", allSquares)
}
checkScore()