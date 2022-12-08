import RegularFunction from './practicecomponents/RegularFunctionComponent.js';
import GeneralFunction from './practicecomponents/generalFunction.js';
import React, { useState } from 'react';
import './practice.css';


const Practice = () => {
    const [regFunction, setRegFunction] = useState(false);
    const [singleLineFunction, setSingleLineFunction] = useState(false);



    const [functionType, setFunctionType] = useState([
        {
            key: 1,
            name: '',
            description: '',
            examples: [

            ]
        },
        {
            key: 2,
            name: 'Regular / Normal',
            description: 'Just a standard function that takes props using the function keyword',
            examples: [
                {
                    normalFunction: `function generalFunction (props) { \n
                       
                        return (
                         
                        );\n
                    }\n
                    
                    export default generalFunction;`,
                }
            ]
        }
    ]);

    function noClosure() {
        let x = 10;

        x++;

        console.log("noClousure value", x);
    }

    noClosure();
    noClosure();


    function Closure() {
        let y = 10;

        console.log("Clousure value out of loop", y);

        function innerFunction() {

            y++;
            console.log("innerFunction", y);
        }

        return innerFunction;
    }

    const closure = Closure();
    closure();


    const test = {
        name: "giotest",
        testType: 1,
        beginTest: function () {
            console.log("\nStarting test...", this.name.repeat(2), this.testType);
        }
    }

    //Declaration   name         parseKey  parameters       parseKey function body
    function testFunction(test) {

        try {
            const testName = test.name;
            const testType = test.testType;

            console.log("\n Test should be: ", testName, testType);

        }
        catch (e) {
            console.log(e)
        }

        return test.beginTest();
    }

    //Reference the function and pass a value 
    testFunction(test);


    const jackTest = function (qty) {
        console.log(arguments);
        return 'jacque is uwu cute 😅'.repeat(qty);

    }

    const testing = jackTest(5);
    console.log(testing);

    const randomFunction = (function (...args) {
        console.log(args);
    })('😘', '🌜');

    const evenBetterFunction = ((...args) => console.log(args))('😘', '🌭');

    let thing = 'thing';



    return (
        <>
            <div>
                <p style={{ display: 'inline-block', padding: '10px' }}> Regular Function</p>
                <input style={{ padding: '10px' }} type="checkbox" onClick={(e) => setRegFunction(e.target.checked)}></input>
            </div>
            <div>
                <p style={{ display: 'inline-block', padding: '10px' }}> Single Line Function</p>
                <input style={{ padding: '10px' }} type="checkbox" onClick={modalHandle}></input>
            </div>
            {regFunction ?
                <>
                    <div>
                        {functionType.map((type) => {


                            return (
                                <GeneralFunction key={type.key} name={type.name} description={type.description} examples={type.examples[0]} />
                            )
                        })}
                    </div>
                </>

                :

                <>

                </>
            }

            {singleLineFunction ?
                <>
                    
                </>

                :

                <>
                    <h1> wut</h1>
                </>
            }

        </>
    );
}

export default Practice;