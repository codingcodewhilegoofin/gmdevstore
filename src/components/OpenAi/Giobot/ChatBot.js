import React,{ useState , useEffect } from 'react';
import {OpenAIApi, Configuration} from 'openai';
import Spotify from '../../Pages/Spotify.js'


const configuration = new Configuration({
    apiKey:'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',
});

const openai = new OpenAIApi(configuration);


const ChatBot = (props) => {
    
    const [chatBotRequest, setChatBotRequest] = useState(props.userInput)
    const [chatBotReply, setChatBotReply] = useState()
    const [chatBotStatus, setChatBotStatus] = useState(false)

    useEffect(() => {

        openai.createCompletion("text-davinci-001", {
            prompt: `${props.userInput}`,
        })


            .then((response) => {
                try {
                    setChatBotStatus(true)
                    setChatBotReply(response);
                    console.log(response);
                }
                catch (e) {
                    console.error("chatBotReplyError: " + e);
                }
            })



    }, [props])

    return(
        <div style={{width: '99%', height: '50%'}}>

            <h4 style={{
                alignSelf: 'center',
                justifyContent: 'center',
                color: '#E0012Aff',
                padding: '5px'
            }}> The reply from the AI is: </h4>

            { chatBotStatus ?
            <p
                style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    color: '#E0012Aff',
                    padding: '5px'
                }}>
                 {`${chatBotReply.data.choices[0].text}` }
            </p>
            : 
            <p style={{
                alignSelf: 'center',
                justifyContent: 'center',
                color: '#E0012Aff',
                padding: '5px'
            }}>Wating...</p>
            }
        </div>
    )
};
export default ChatBot