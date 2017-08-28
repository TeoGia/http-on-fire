const electron = require('electron');
const isDev = require('electron-is-dev');
require('electron-debug')({showDevTools: true});
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow() {

  const screen = electron.screen.getPrimaryDisplay().size;
  const newWidth = Math.round(screen.width * 0.75);
  const newHeight = Math.round(screen.height * 0.8);

  mainWindow = new BrowserWindow({ width: newWidth, height: newHeight });
  mainWindow.setMenu(null);
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  if (isDev) {
    console.log('Running in development mode.');
    mainWindow.webContents.openDevTools();
  } else {
    console.log('Running in production mode.');
  }

  mainWindow.on('closed', function() {
    mainWindow = null;
  })
}
app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
})