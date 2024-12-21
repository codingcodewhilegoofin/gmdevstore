import RegularFunction from './RegularFunctionComponent';

function generalFunction(props) {
    console.log("Props", props)
    return (
        <>
            <div style={{ backgroundColor: 'black' }}>
                <p style={{ color: 'white', fontSize: 'xx-large', backgroundColor: 'black' }}> Name: {(props?.name) ? props?.name : "No name"}  </p>
                <p style={{ color: 'white', fontSize: 'xx-large', backgroundColor: 'black' }}>  Description: {(props?.description) ? props?.description : 'No Description'} </p>
                <p style={{ color: 'white', fontSize: 'xx-large', backgroundColor: 'black' }}>  Example: </p>
                <code>
                    <p style={{ color: 'white', fontSize: 'xx-large', backgroundColor: 'black', margin: '50px', padding: '50px' }}>{(props?.examples?.normalFunction) ? props?.examples?.normalFunction : 'No example'}
                    </p>
                </code>
            </div>
        </>
    );
}

export default generalFunction;