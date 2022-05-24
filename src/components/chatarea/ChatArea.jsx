import { Box } from "@mui/material";
import { useContext } from "react";
import { ChatsContext, ChatsProvider } from "../../context/Chats";
import Message from "../message/Message";

const ChatArea = () => {

    const { chats } = useContext(ChatsContext)

    return (
        <Box
            sx={{
                height: 'calc(100vh - 200px)',
                border: '1px solid #ccc',
                overflowY: 'scroll',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Message user='Anonymous' message='Please enter your email address' />
            <Message user='RV' message='asjnjdhfjhdsafadkjfdlkasjfdasdlcm klfmclkdajmc  okadsjck mklm lkam lkcma lkm klm klm kl mlk mlk mklm ' />        
            {chats.map(c => (
                <Message user='anon' message={c} />
            ))}
        </Box>
    );
}
 
export default ChatArea;