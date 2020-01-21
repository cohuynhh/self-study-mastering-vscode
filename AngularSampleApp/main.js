const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

let window

function createWindow() {

    window = new BrowserWindow({
        width: 400,
        height: 600,
        backgroundColor: 'ffffff',
        icon: url.format({
            pathname: path.join(__dirname, `/dist/assets/logo.png`),
            protocol: "file:",
            slashes: true
        })
    })

    window.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    window.on('closed', function () {
        window = null;
    });
}

app.on('ready', createWindow);
