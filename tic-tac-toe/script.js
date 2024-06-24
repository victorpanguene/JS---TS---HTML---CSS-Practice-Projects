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
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0,4,8], [2,4,6]
  ]
  
  winningCombos.forEach(array => {
    const circleWins = array.every(cell => {
      allSquares[cell].firstChild?.classList.contains('circle')
    if (circleWins) {
    }
    })
  })
}
checkScore()
