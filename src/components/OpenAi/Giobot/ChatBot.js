import React, { useState, useEffect } from 'react';
import { OpenAIApi, Configuration } from 'openai';

/**
 *  OpenAI has trained cutting-edge language models that are 
 *  very good at understanding and generating text.
 * 
 *  Solve virtually any task that involves processing language.
 * 
 *   Content generation
 *   Summarization
 *   Classification
 *   Categorization
 *   Sentiment analysis
 *   Data extraction
 *   Translation
 * 
 *  The COMPLETIONS endpoint is core of the API.
 *  
 *      Input:          text ->  prompt 
 *      API returns:    TextCompletion -> "Matches text"
 * 
 *  1 Adding an adjective to the prompt changes the resulting completion
 *  2 Adding examples to your prompt can help communicate patterns or nuances.
 *  
 *  
    Suggest three names for an animal that is a superhero.

     Animal: Cat
     Names: Captain Sharpclaw, Agent Fluffball, The Incredible 

    3 You can also control completions by adjusting your settings
      Temperature is a value between 0 and 1 that essentially
      lets you control how confident the model should be when making these predictions. 

      Lowering temperature means it will take fewer risks, 
      and completions will be more accurate and deterministic. 

      Increasing temperature will result in more diverse completions.

    
 */

//Add key here 
const configuration = new Configuration({
    apiKey: '',
});

const openai = new OpenAIApi(configuration);


const ChatBot = (props) => {

    const [chatBotReply, setChatBotReply] = useState([])
    const [chatBotStatus, setChatBotStatus] = useState(false)
    
    const callOpenApi = (chatBotReq) => {
        
        openai.createCompletion("text-davinci-001", {
            prompt: `${chatBotReq}`,
            temperature: 0.9,
        })
            .then((response) => {
                try {
                    if (response.status === 200) {
                        setChatBotStatus(true);
                        setChatBotReply(response.data.choices[0].text);
                    }
                }
                catch (e) {
                    console.error("chatBotReplySTATUSerror: " + e);
                }
            })
            .catch((err) => {
                console.log("First Fetch " + err);
            })
    }
   

    useEffect(() => {
        
        if(props.toggle === true)
        {
            callOpenApi(props.userInput);
        }
        
    }, [props.userInput])

    return (
        <div style={{ width: '99%', height: '50%' }}>

            <h4 style={{
                alignSelf: 'center',
                justifyContent: 'center',
                color: '#3F646Dff',
                padding: '5px',
                fontWeight:'900',
            }}> The reply from the AI is: </h4>

            {chatBotStatus ?
                <p
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        color: '#19819Fff',
                        padding: '5px'
                    }}>
                    {`${props.userInput}: ` + chatBotReply }
                </p>
                :
                <p style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    color: '#19819Fff',
                    padding: '5px',
                    fontWeight:'900',
                }}>Wating...</p>
            }
        </div>
    )
};
export default ChatBot