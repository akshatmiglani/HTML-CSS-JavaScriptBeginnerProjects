const defcolor = '#000000'
const defmode = 'color'
const defsize = 16

let currColor = defcolor
let currMode = defmode
let currSize = defsize

function setColor(newColor) {
  currColor = newColor
}

function setMode(newMode) {
  activateButton(newMode)
  currMode = newMode
}

function setSize(newSize) {
  currSize = newSize
}

const Picker = document.getElementById('colorpick')
const color = document.getElementById('color')
const eraser = document.getElementById('erase')
const clear = document.getElementById('clear')


const sizeValue = document.getElementById('sizeValue');

const sizeSlider = document.getElementById('sizeSlider');

const grid = document.getElementById('box')

Picker.oninput = (e) => setColor(e.target.value)
color.onclick = () => setMode('color')
eraser.onclick = () => setMode('eraser')
clear.onclick = () => reloadGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeSize(value) {
  setSize(value)
  updateSizeValue(value)
  reloadGrid()
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function reloadGrid() {
  clearGrid()
  setupGrid(currSize)
}

function clearGrid() {
  grid.innerHTML = ''
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement)
  }
}

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (currMode === 'color') {
    e.target.style.backgroundColor = currColor
  } else if (currMode === 'eraser') {
    e.target.style.backgroundColor = '#fefefe'
  }
}

function activateButton(newMode) {
  if (currMode === 'color') {
    color.classList.remove('active')
  } else if (currMode === 'eraser') {
    eraser.classList.remove('active')
  }

   if (newMode === 'color') {
    color.classList.add('active')
  } else if (newMode === 'eraser') {
    eraser.classList.add('active')
  }
}

window.onload = () => {
  setupGrid(defsize)
  activateButton(defmode)
}