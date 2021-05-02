const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')

const width = 1200
const height = 630

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

context.fillStyle = '#f7f6f2'
context.fillRect(0, 0, width, height)

context.font = 'bold 60pt Menlo'
context.textAlign = 'center'
context.textBaseline = 'top'
context.fillStyle = '#000'

const firstLine = 'Fetch failed but Flask'

const firstLineWidth = context.measureText(firstLine).width
context.fillRect(600 - firstLineWidth / 2 - 10, 170, firstLineWidth + 20, 100)
context.fillStyle = '#fff'
context.fillText(firstLine, 600, 170)

// Reset above white style
context.fillStyle = '#000'

const secondLine = 'response is success'

const secondLineWidth = context.measureText(secondLine).width
context.fillRect(600 - secondLineWidth / 2 - 10, 290, secondLineWidth + 20, 100)
context.fillStyle = '#fff'
context.fillText(secondLine, 600, 290)

context.fillStyle = '#000'
context.font = 'bold 30pt Menlo'
context.fillText('rajasimon.io', 600, 530)

loadImage('./static/images/favicon-32x32.png').then(image => {
  context.drawImage(image, 340, 515, 70, 70)
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync('./test.png', buffer)
})