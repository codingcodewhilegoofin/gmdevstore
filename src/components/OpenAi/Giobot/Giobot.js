import React,{ useState } from 'react';
import ChatBotCard from './ChatBotCard';

const message1 = 'Hello';
const message2 = 'Hello2';

const Giobot = () => {
    
    const [chatBotStatus,setChatBotStatus] = useState(false)

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
                color:'#E0012Aff',
                backgroundColor:'transparent',
                border:'none',
                cursor: 'pointer'
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
                height: '100vh',
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