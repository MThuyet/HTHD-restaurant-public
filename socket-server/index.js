const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*' },
});

let connectedClients = [];

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    connectedClients.push(socket);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        connectedClients = connectedClients.filter((s) => s.id !== socket.id);
    });
});

// Nhận POST từ Laravel và phát sóng tới các client
app.post('/booking-notify', (req, res) => {
    const booking = req.body;
    io.emit('new-booking', booking); // Gửi sự kiện đến tất cả client
    res.sendStatus(200);
});

server.listen(3001, () => {
    console.log('Socket.IO server is running on http://localhost:3001');
});
