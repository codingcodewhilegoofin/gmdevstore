import React,{ useState } from 'react';
import ChatBotCard from './ChatBotCard';

const message1 = 'Let AI help you learn about me, search "Does Gio know about frameworks"';
const message2 = 'Let AI help you learn about me, search "What scripting languages does Gio know"';

const Giobot = () => {
    
    const [chatBotStatus,setChatBotStatus] = useState(true)

    const chatbothandle = () => {
        var x = document.getElementById("chatbot");
        if (x.style.display === "none") 
        {
            x.style.display = "block";
            setChatBotStatus(!chatBotStatus)
        }
        else 
        {
            x.style.display = "none";
        }
    }
    
    return(
        <div
            style={{
                backgroundColor: '#101730ff',
                border: '1px solid #212C50ff',
            }}
        >
            <button 
            style={{
                color:'#025B79ff',
                backgroundColor:'transparent',
                border:'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
            }} 
            onClick={chatbothandle}>
               GioBot: helps you find information about gio
               using OpenAi
            </button>
           
            <div 
            id="chatbot"      
            style={{
                backgroundColor: '#3F646Dff',
                border: '1px solid #2E5252ff',
                width: '100%',
                height: '100%',
            }}>
            
            {chatBotStatus ? 
            <ChatBotCard message={message1}
                
            />
            :
            <ChatBotCard message={message2}
            
            />
            }

            </div>
        </div>
    )
};
export default Giobot