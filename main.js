const { app, BrowserWindow, Menu, MenuItem } = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let mainMenu = new Menu();
let menuItem = new MenuItem({ 
    label: 'Post App',
    submenu: [
        { label: 'File'},
        { label: 'Exit'}
    ]
});

mainMenu.append(menuItem);

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        // frame: false,
        webPreferences: {
            nodeIntegration: true
        },
        // backgroundColor: '#3B5323',
        icon: './medal.png'
    });

    win.once('ready-to-show', () => {
        win.show();
    })

    // and load the index.html of the app.
    win.loadFile('index.html');
    // Open the DevTools.
    // win.webContents.openDevTools()
    Menu.setApplicationMenu(mainMenu);

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    });
};

// function createSecondaryWindow() {
//     secondWin = new BrowserWindow({
//         width: 300,
//         height: 300,
//         webPreferences: {
//             nodeIntegration: true
//         },
//         backgroundColor: 'green'
//     });

//     secondWin.loadFile('index.html');

//     secondWin.on('closed', () => {
//         // Dereference the window object, usually you would store windows
//         // in an array if your app supports multi windows, this is the time
//         // when you should delete the corresponding element.
//         secondWin = null
//     });

// }


// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', (e) => {
    console.log(app.getPath('desktop'));
    
    createWindow();
});

// app.on('before-quit', (e) => {
//     console.log('App is trying to quit!');
// })

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    };
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    };
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.