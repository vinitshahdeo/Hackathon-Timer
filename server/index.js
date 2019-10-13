var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var jsonParser = bodyParser.json();

const PORT = process.env.PORT || 3000;

// Routes
app.get('/', function(req, res) {
    res.send('Listening');
});

app.post('/payload', jsonParser, function (req, res) {
    console.log('received a webhook event', req.headers);
    const body = req.body;
    const webhookType = req.headers['x-github-event'];

    console.log('webhook type:', webhookType);

    switch (webhookType) {
        // https://developer.github.com/webhooks/#events
        case 'ping':
            console.log('got a ping.');
            break;
        case 'push':
            console.log('got a push');
        default:
    }
    
    io.emit(webhookType, {
        payload: req.body,
    });
    
    return res.status(200).json({ status: 'ok' });
});

// Socket.io Listening
io.on('connection', function(socket){
    console.log('UI is listening');
});

// Server listening
http.listen(PORT, function(){
    console.log(`listening for webhooks on *:${PORT}`);
});
