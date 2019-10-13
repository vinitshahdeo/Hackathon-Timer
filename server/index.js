var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').createServer(app);

var io = require('socket.io')(http);
var jsonParser = bodyParser.json();

// UPDATE to where node/express is running. Eg, your Heroku URL, or an ngrok URL.
// Remember to also set this as the webhook URL in your GitHub Webhook Configuration
const HOST = process.env.HOST || '28c3ca78.ngrok.io';
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send(`<h1>GitHub Webhook Server</h1><p>Waiting for github webhooks to <a href="http://${HOST}/payload">http://${HOST}/payload</a></p>`);
});

const log = (logContent) => console.log(`\x1b[1m ${Date().toLocaleString()} \x1b[0m: %s`, logContent)

app.post('/payload', jsonParser, function (req, res) {
    console.log('received a webhook event', req.headers);
    const webhookType = req.headers['x-github-event'];

    switch (webhookType) {
        // https://developer.github.com/webhooks/#events
        case 'ping':
            log(`got a ping.`);
            break;
        case 'push':
            log(`got a push.`);
            break;
        default:
            log(`got a ${webhookType}`);
    }
    
    io.emit(webhookType, {
        payload: req.body.payload,
    });
    
    return res.status(200).json({ status: 'ok' });
});

// Socket.io is Listening
io.on('connection', function(socket) {
    log(`A new client has connected.`);

    socket.on('disconnect', function(){
        log(`The client has disconnected`);
    });
});

// Server is listening
http.listen(PORT, function(){
    log(`Running on *:${PORT}`);
});
