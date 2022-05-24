import { io } from "socket.io-client";

const socket = io('http://localhost:8000')

const broadcast = (msg) => {
    socket.emit('send', msg)
}

export {
    socket,
    broadcast
}