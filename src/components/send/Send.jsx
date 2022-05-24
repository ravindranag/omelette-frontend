import { Container, IconButton, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useState } from "react";
import { indigo } from "@mui/material/colors";
import { useContext } from "react";
import { ChatsContext } from "../../context/Chats";
import { socket, broadcast } from "../../utilities/socket";

const SendMessage = () => {

    const { chats, setChats } = useContext(ChatsContext)

    const [message, setMessage] = useState('')

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    socket.on('send', (newMsg) => {
        const newChats = chats.concat(newMsg)
        setChats(newChats)
    })


    return (
        <Container
            sx={{
                width: '100%',
                height: 'fit-content',
                position: 'fixed',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                padding: 2,
                display: 'flex'
            }}
        >
            <TextField 
                multiline
                rows={3}
                value={message}
                onChange={handleMessageChange}
                sx={{
                    flexGrow:1
                }}
            />
            <IconButton
                sx={{
                    marginLeft: 1,
                    background: indigo[900],
                    color: '#fff',
                    '&:hover': {
                        background: indigo[900],
                        color: '#fff',
                    },
                    width: 50,
                    height: 50
                }}
                onClick={() => {
                    broadcast(message)
                    const newChats = chats.concat(message)
                    setChats(newChats)
                    setMessage('')
                }}
            >
                <Send />
            </IconButton>
            {/* <Button
                variant='contained'
                sx={{
                    height: 'fit-content',
                    // borderRadius: '50%'
                }}
            >
                <Send />
            </Button> */}
        </Container>
    );
}
 
export default SendMessage;