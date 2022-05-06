import React, { useState } from 'react';
import ChatBot from './ChatBot';

const ChatBotCard = (props) => {

    const [chatBotStatus, setChatBotStatus] = useState(false)
    const [userInput, setUserInput] = useState('')

    const formHandle = (e) => {
        e.preventDefault();
        setUserInput(e.target[0].value);
    }

    return (
        <div
            style={{
                backgroundColor: '#101730ff',
                border: '1px solid #212C50ff',
                height: '100%',
            }}
        >
            <form onSubmit={formHandle} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center', padding: '5px' }}>
                <label
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        color: '#E0012Aff', padding: '5px'
                    }}
                    for="search">

                    {props.message}
                </label>

                <input
                    style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #025B79ff',
                        padding: '10px', color: '#E0012Aff'
                    }}
                    id="search"
                    type="text"
                />

                <label></label>

                <input
                    style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #19819Fff',
                        color: '#19819Fff',
                        padding: '10px',
                        cursor: 'pointer'
                    }}
                    type="submit"
                    value="Go">

                </input>

                <label
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        color: '#E0012Aff',
                        padding: '5px'
                    }}
                    for="search">

                    {"You asked about : " + userInput}

                </label>
            </form>

            <ChatBot userInput={userInput} />

        </div>
    )
};
export default ChatBotCard