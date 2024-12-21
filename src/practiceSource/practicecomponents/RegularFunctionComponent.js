function RegularFunctionComponent(props) {


    return (
        <>
            <div style={{  backgroundColor: 'black' }}>
                <p style={{ color: 'white', fontSize: 'xx-large', backgroundColor: 'black' }}> RegularFunctionComponent() </p>
                <h3 style={{ color: 'red', fontSize: 'xx-large', backgroundColor: 'black' }}>{(props?.number) ? props?.number : "No number"}</h3>
            </div>
        </>
    );
}

export default RegularFunctionComponent;