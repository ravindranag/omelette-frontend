import { createContext, useState } from "react";

const ChatsContext = createContext()


const ChatsProvider = ({children}) => {
    const [chats, setChats] = useState([
        'hello',
        'hi'
    ])

    return (
        <ChatsContext.Provider value={{chats, setChats}}>
            {children}
        </ChatsContext.Provider>
    );
}
 
export {ChatsProvider, ChatsContext};