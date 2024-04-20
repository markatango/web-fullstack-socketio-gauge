const express = require('express');
const app = express()
const httpServer = require('http').createServer(app);
const port = process.env.PORT || 5000;
// const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const cors = require('cors');

const {Server} = require('socket.io')

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:8080", "http://localhost:4000"]
  }
});


io.on('connection', socket => {
    console.log('User connected');
  
    io.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())
app.post('/data', (req, res)=>{
    angle = req.body.angle;
    timestamp = req.body.timestamp;
    console.log(`received: ${timestamp}:${angle}`);
    io.emit("float_value", {"angle" : angle, "timestamp":timestamp})
    res.send({"success":true})
})

httpServer.listen(port, () => {
    console.log(`Server started on port ${port}`);
});