import React, { useState } from 'react';
import ChatBot from './ChatBot';

const ChatBotCard = (props) => {

    let reg = "[a-zA-Z0-9.\\s]+";
    //let reg = new RegExp(`[a-zA-Z0-9.\s]+`);

    const [chatBotStatus, setChatBotStatus] = useState(false)
    const [userInput, setUserInput] = useState('')
    const [toggle, setToggle] = useState(false)
    const [errmssg, setErrmssg] = useState('');

    const formHandle = (e) => {
        e.preventDefault();
        console.log(e)
        
        let x = document.forms["botForm"]["formInput"].value;
  
        if ( x.length > 126)
        {
            setErrmssg('Shorten your question');
            setTimeout(() => {
                setErrmssg('');
              }, 3000);
            return false;
        }
        if ( x.length <= 1)
        {
            setErrmssg('Please, talk to the AI in a sentence more than 1 letter');
            setTimeout(() => {
                setErrmssg('');
              }, 3000);
            return false;
        }
        setUserInput(e.target[0].value);
        setToggle(true);
    }

    return (
        <div
            style={{
                backgroundColor: '#1B2524ff',
                border: '1px solid #212C50ff',
                height: '100%',
            }}
        >
            <form 
            
                name="botForm"
                onSubmit={formHandle} 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    flexFlow: 'column wrap', 
                    alignItems: 'center', 
                    padding: '5px' 
                }}

            >
                <label
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        color: '#3F646Dff', padding: '5px'
                    }}
                    for="search">

                    {props.message}
                </label>

                <input
                    required
                    pattern={reg}
                    minlength="1"
                    maxLength="200"
                    min="0"
                    max="0"
                    aria-label="Textbox max length 200 words"
                    name="formInput"
                    style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #025B79ff',
                        padding: '10px', color: '#19819Fff'
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
                    name="errormssg"
                    style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #025B79ff',
                        padding: '10px', color: '#E0012Aff'
                    }}
                >
                    {errmssg}
                    
                </label>

                <input
                    style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #025B79ff',
                        padding: '10px', color: '#19819Fff'
                    }}  
                    type="reset" 
                />

                <label
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        color: '#3F646Dff',
                        padding: '5px'
                    }}
                    for="search">

                    {"You asked about : " + userInput}

                </label>
            </form>

            <ChatBot userInput={userInput} toggle={toggle} />

        </div>
    )
};
export default ChatBotCard