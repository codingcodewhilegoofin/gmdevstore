import React,{ useState } from 'react';
import ChatBotCard from './ChatBotCard';

const message1 = 'Let AI help you learn about me, search "Does Gio know about frameworks"';
const message2 = 'Let AI help you learn about me, search "What scripting languages does Gio know"';

const Giobot = () => {
    
    const [chatBotStatus,setChatBotStatus] = useState(true);
    const [toggle,setToggle] = useState();


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
            <div className="choicediv" style={{backgroundColor:"#101730ff" , textAlign:"center", width:"100%", border:"1px solid #025B79ff"}}>
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
               {toggle} AI Gio-chatbot 
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