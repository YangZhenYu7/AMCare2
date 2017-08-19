
const electron = require('electron');
const { app, BrowserWindow } = electron;
const spawn = require('child_process').spawn;
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
  // Create the browser window.
  // const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
  win = new BrowserWindow({
    width: 1200,
    height: 700,
    frame: true
  });

     startDBServer(win);
  // and load the index.html of the app.

    win.loadURL('http://localhost:3000');

  // Open the DevTools.
   win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});


function startDBServer(win) {
    free = spawn('mongod', ['--dbpath', './src/app/database/mongodb', '--port', '12221']);
// 捕获标准输出并将其打印到控制台

    free.stdout.on('data', function (data) {
        console.log('standard output:\n' + data);
    });

// 捕获标准错误输出并将其打印到控制台
    free.stderr.on('data', function (data) {
        console.log('standard error output:\n' + data);
    });
// 注册子进程关闭事件
    free.on('exit', function (code, signal) {
        console.log('child process eixt ,exit:' + code);
    });
}