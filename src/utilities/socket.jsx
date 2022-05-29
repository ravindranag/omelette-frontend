import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_API_URL || 'http://localhost:8000')

const broadcast = (msg) => {
    socket.emit('send', msg)
}

export {
    socket,
    broadcast
}