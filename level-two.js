let score = 0

const allBalls = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

for (let i = 0; i < allBalls.length; i++) {
  allBalls[i].addEventListener('click', () => {
    score += 10
    scoreDisplay.innerText = score
    if (score >= 100) {
      levelWinner.style.opacity = 1
    }
  })
}
