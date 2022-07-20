import React,{ useState } from 'react';
import ChatBotCard from './ChatBotCard';
import './chat.css'

const message1 = 'Let AI help you learn about me, search "Does Gio know about frameworks"';
const message2 = 'Let AI help you learn about me, search "What scripting languages does Gio know"';

const Giobot = () => {
    
    const [chatBotStatus,setChatBotStatus] = useState(true);
    const [toggle,setToggle] = useState('CLOSE');


    const chatbothandle = () => {
        var x = document.getElementById("chatbot");
        if (x.style.display === "none") 
        {
            x.style.display = "block";
            setChatBotStatus(!chatBotStatus)
            setToggle('CLOSE');
        }
        else 
        {
            x.style.display = "none";
            setToggle('OPEN');
        }
    }
    
    return(
        <div
            
        
            style={{
                backgroundColor: '#101730ff',
                
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <div className="chatbotBar" >
            <button 
            style={{
                color: '#025B79ff',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
                fontSize: 'smaller',
            }}
            onClick={chatbothandle}>
               <a>{toggle}</a> AI Gio-chatbot 
            </button>

            </div>
           
            <div 
            id="chatbot"      
            style={{
                backgroundColor: '#3F646Dff',
                border: '5px solid #2E5252ff',
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