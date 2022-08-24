import React, { useState } from 'react';
import ChatBotCard from './ChatBotCard';
import './chat.css'

const message1 = 'Let AI help you learn about me, search "Does Gio know about frameworks"';
const message2 = 'Let AI help you learn about me, search "What scripting languages does Gio know"';


const Giobot = () => {

    const [chatBotStatus, setChatBotStatus] = useState(true);
    const [toggle, setToggle] = useState('OPEN');
    const [mainMenuState, setmainMenuState] = useState('none');


    const chatbothandle = () => {
        var x = document.getElementById("chatbot");
      
        setChatBotStatus(!chatBotStatus);

        if (chatBotStatus) {
            setmainMenuState('block');
            x.style.display = mainMenuState;
            setToggle('CLOSE');
        }
        else {
            setmainMenuState('none');
            x.style.display = mainMenuState;
            setToggle('OPEN');
        }
    }

    return (
        <div


            style={{
                backgroundColor: '#101730ff',

                display: 'flex',
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
                    display:`${mainMenuState}`
                }}>

                <p style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        color: 'white', padding: '5px'
                    }}>This is an upcoming chat feature that will let AI from OpenAi help you explore my website.<br/> You can search for topics or keywords
                    within the website and the AI will try to help you with your questions.<br/> A "waiting..." status means there is a connection lost or "the bot" may still
                    be working on a response.</p>

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