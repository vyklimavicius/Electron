- Electron:

Works on two processes:

Main => Node.js (Server side)

Renderer => Google chromium(Client side)

- Useful commands

electron . => runs the electron runtime on the current directory

electron --inspect=<port> . => this is useful for devtool debugging.

electron --inspect-brk=<port> . => same but stops the excecution right there.

- Processes:

Main:

Handles or have all the modules that handle all the functionality for the server side of your app.

-app module => Is very important because it handles you app lifecycle. :

app.getPath => for absolute paths, use this method for fs functionality.

-BrowserWindow:

once.('ready-to-show, () => {
    // win.show()
})
This helps to load something until all the resources are loaded. as an option on the BrowserWindow instance options false must be set to false.

Parent and child:

FramelessWindow => No toolbar

**Manage window state: 
npm electron-window-state => helps you to keep the width, height of the window as it gets when the user close it.

webContents: 

Give you full control of everything that's been loaded from the web



