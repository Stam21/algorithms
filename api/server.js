const express= require('express')
const http = require("http");
const cors = require("cors");
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = require('socket.io')(server, {cors: {origin: "*"}})




io.on("connection", socket => {
    console.log("Connected!");
    socket.emit("message", "hello world");
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));