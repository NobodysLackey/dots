let score = 0

const allBalls = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

for (let i = 0; i < allBalls.length; i++) {
  allBalls[i].addEventListener('click', () => {
    score += +allBalls[i].dataset.increment
    if (score >= 100) {
      scoreDisplay.innerText = 100
      levelWinner.style.opacity = 1
    } else {
      scoreDisplay.innerText = score
    }
  })
}
