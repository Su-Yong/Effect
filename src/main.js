const electron = require('electron')
const path = require('path')
const url = require('url')

const BrowserWindow = electron.BrowserWindow
const app = electron.app

const rootPath = (() => {
  let spliter = __dirname.split('\\')
  spliter.pop()

  return spliter.join('\\')
})()

const locals = {}
const pug = require('electron-pug')({pretty: true}, locals)

let window

function createWindow () {
  window = new BrowserWindow({width: 800, height: 600, icon: rootPath + '/res/image/icon.ico'})

  window.loadURL(url.format({
    pathname: path.join(__dirname, '../res/pug/index.pug'),
    protocol: 'file:',
    slashes: true
  }))

  window.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})
