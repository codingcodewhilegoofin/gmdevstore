import { useEffect } from 'react';

const TestAPI = () => {

    useEffect(() => {

        async function getResponse() {
            const response = await fetch('https://us-central1-gmappsapi.cloudfunctions.net/test',
                {
                    method: 'GET',
                    mode: 'no-cors',
                    
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.text;
            
            console.log(" Response and data is " + data  );
        
        }

        getResponse();

    }, [])



    return (
        <>
            <h2> Test </h2>
        </>
    )
}

export default TestAPI;