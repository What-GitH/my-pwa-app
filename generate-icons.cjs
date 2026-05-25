// npm install canvas  (먼저 실행)
// node generate-icons.cjs
const { createCanvas } = require('canvas')
const fs = require('fs')

function makeIcon(size, path) {
  const c = createCanvas(size, size)
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#42b883'
  ctx.fillRect(0, 0, size, size)
  ctx.fillStyle = '#fff'
  ctx.font = `bold ${size * 0.35}px sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('PWA', size / 2, size / 2)
  fs.writeFileSync(path, c.toBuffer('image/png'))
}
makeIcon(192, 'public/pwa-192x192.png')
makeIcon(512, 'public/pwa-512x512.png')
console.log('아이콘 생성 완료')