import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Cliente conectado: " + socket.id);
})