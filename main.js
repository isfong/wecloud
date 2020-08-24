const { app, BrowserWindow } = require( 'electron' );
let win;
// new WebFrame.webFrame.setZoomLevel( 50 );
function createWindow() {
    win = new BrowserWindow( {
        width: 1400,
        height: 800,
        // icon: __dirname + '/dyh.png',
        title: '见福/FOOK',
        zoomToPageWidth: true,
    } );
    win.loadURL( 'https://fook.bossdream.com/console' );
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
