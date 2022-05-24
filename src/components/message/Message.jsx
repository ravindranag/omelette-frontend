import { Avatar, Box } from "@mui/material";



const Message = ({user, message}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                maxWidth: 400,
                width: '100%',
                marginY: 1
            }}
        >
            <Avatar
                sx={{
                    margin: '0 10px 0 0'
                }}
            >
                {user[0]}
            </Avatar>
            <Box
                sx={{
                    background: '#002984',
                    color: '#fff',
                    padding: 2,
                    borderRadius: '0 32px 32px 32px',
                    wordBreak: 'break-word'
                }}
            >
                {message}
            </Box>
        </Box>
    );
}
 
export default Message;