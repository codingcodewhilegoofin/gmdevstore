import React,{ useState } from 'react';
import ChatBot from './ChatBot';

const ChatBotCard = (props) => {
    
    const [chatBotStatus,setChatBotStatus] = useState(false)

    return(
        <div
            style={{
                backgroundColor: '#101730ff',
                border: '1px solid #212C50ff',
            }}
        >
            <h1 style={{color:'white'}}>{props.message}</h1>
            <ChatBot/>
        </div>
    )
};
export default ChatBotCard