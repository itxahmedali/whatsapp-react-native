const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
// app.use(express.static(__dirname + '/hidden10'));
// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./hidden10/index.html"));
// });


io.on('connection', (socket) => {
    socket.on('connect', () => {
        console.log(socket.connected); // true
      });
    console.log("a user connected :D");
        socket.on('message', (message) => {
            const obj = JSON.stringify(message, socket.id)
            io.emit('message',`${obj}`);
            socket.broadcast.to(message.id).emit( 'message',`${obj}`);
            console.log(message);

        });
//   socket.on('typing', ({user,status})=>{
//     const obj = {status, user}
//     io.emit('typing', obj)
//     socket.broadcast.to(user).emit( 'typing',`${obj}`);
//   })
//   socket.on('notification', (noticondition, userData) => {
//     const obj = JSON.stringify(noticondition)
//     io.emit('notification',`${obj}`);
//     socket.broadcast.to(userData).emit( 'notification',`${obj}`);
//   });
//   socket.on('call', (noticondition, userData) => {
//     const obj = JSON.stringify(noticondition)
//     io.emit('call',`${obj}`);
//     socket.broadcast.to(userData).emit( 'call',`${obj}`);

//   });
  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
  // USER IS ONLINE
//   socket.on("online", (userId) => {
//     const obj = JSON.stringify(userId);
//     io.emit('online',`${obj}`);
// });

// // USER IS OFFLINE
// socket.on("offline", (userId) => {
//   const obj = JSON.stringify(userId);
//   io.emit('offline',`${obj}`);
// });
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT} hello`));