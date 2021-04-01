const switchTheme = document.getElementById('switch')
const visitedCheck = document.getElementById('visitedcheck')
let visitedTimes = window.localStorage.getItem('visitedtimes')
let theme = window.localStorage.getItem('theme')
const makeChange = function () {
  theme = !theme
  if (theme) {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  } else {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  }
  window.localStorage.setItem('theme', theme)
}
switchTheme.addEventListener('click', makeChange)
if (theme !== null) {
  theme = !(theme === 'true')
  makeChange()
} else {
  theme = true
  window.localStorage.setItem('theme', theme)
}
if (visitedTimes !== null) {
  visitedTimes = parseInt(visitedTimes) + 1
  visitedCheck.textContent = visitedTimes + ' times'
  window.localStorage.setItem('visitedtimes', visitedTimes)
} else {
  visitedTimes = 1
  visitedCheck.textContent = visitedTimes + ' time'
  window.localStorage.setItem('visitedtimes', visitedTimes)
}
