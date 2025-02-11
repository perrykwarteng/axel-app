const { app, BrowserWindow } = require("electron/main");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    icon: path.resolve(__dirname, "./icon.ico"),
    width: 800,
    height: 600,
  });

  win.loadFile("dist/axle-load/browser/index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
