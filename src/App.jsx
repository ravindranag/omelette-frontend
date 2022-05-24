import logo from './logo.svg';
import './App.css';
import {Box, Container, createTheme, styled, ThemeProvider} from '@mui/material'

import { io } from "socket.io-client";
import { useEffect } from 'react';
import NavBar from './components/navbar/NavBar';
import ChatArea from './components/chatarea/ChatArea';
import SendMessage from './components/send/Send';
import { ChatsProvider } from './context/Chats';

const Offset = styled('div')(({theme}) => theme.mixins.toolbar)

const theme = createTheme({})


function App() {
    return (
        <ThemeProvider
            theme={theme}
        >
            <Box>
                <NavBar />
                <Offset />
                <ChatsProvider>
                    <Container>
                        <ChatArea />
                        <SendMessage />
                    </Container> 
                </ChatsProvider>
            </Box>
        </ThemeProvider>
        
    );
}

export default App;