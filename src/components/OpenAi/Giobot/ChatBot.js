import React,{ useState , useEffect } from 'react';
import {OpenAIApi, Configuration} from 'openai'


const configuration = new Configuration({
    apiKey:'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',
});

const openai = new OpenAIApi(configuration);


const ChatBot = () => {
    
    useEffect(() => {
        openai.createCompletion("text-davinci-001",{
            prompt: "Hello world",
        })
        .then((response) => {
            console.log(response);
        })

    }, [])

    return(
        <div>
            <h1 style={{color:'white'}}>Hello</h1>
        </div>
    )
};
export default ChatBot