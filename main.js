const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {

    win = new BrowserWindow({
        width: 600,
        height: 400,
        frame: false,
        resizable: false
        
    })


    win.loadURL(url.format({
        pathname: path.join(__dirname, '/assets/views/index.html'),
        protocol: 'file',
        slashes: true
    }))

    // opens the dev tools on init
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    })
};

//some api can only be called after this point
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

//recreate win for mac os 
app.on('activate', () => {

    if (win === null) {
        createWindow();
    }
});





