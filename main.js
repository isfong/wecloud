const { app, BrowserWindow } = require( 'electron' );
let win;
// new WebFrame.webFrame.setZoomLevel( 50 );
function createWindow() {
    win = new BrowserWindow( {
        width: 1400,
        height: 800,
        // icon: __dirname + '/dyh.png',
        title: 'Yinji Plaza',
        zoomToPageWidth: true,
    } );
    win.loadURL( 'https://www.bossdream.com/console/dashboard/data-center/data-repair?brand=yinji' );
    win.on( 'closed', () => {
        win = null
    } );
}

app.commandLine.appendSwitch( "--enable-http-cache" );
app.on( 'ready', createWindow );

app.on( 'window-all-closed', () => {
    if ( process.platform !== 'darwin' ) {
        app.quit()
    }
} );

app.on( 'activate', () => {
    if ( win === null ) {
        createWindow()
    }
} );
