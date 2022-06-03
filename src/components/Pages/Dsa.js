//Basic imports
import React, { Component , useState, useEffect} from 'react';
//Custom IMPORTS: 

let arrayBox = <h1>Hello</h1>;


//Custom Package import?
const Dsa = () => {


    return (
        <div >
            <p 
                style={{ color: 'white'}}
            > 
                Interactive and informative JSX implementation of DSA.
            </p>

            <h4 
                style={{ color: 'white'}}
            > 
               Data Structures & Algorithms
            </h4>

            <p 
                style={{ color: 'white'}}
            > 
               Data Structures
            </p>

            <ul>
            <a 
                style={{ color: 'white'}}
               
            > 
               Array
            </a>
            </ul>

            <h2 
                style={{ color: 'white'}}
            > 
               Array
            </h2>

            {arrayBox}


            <div style={{ padding: '5px' }}>
                <form 
                    onSubmit={array}
                >
                    <label 
                        for="quantity"
                        style={{ color: 'white', padding: '5px'}} 
                    > 
                        Enter 3 numbers between (1-10):
                    </label>
                    <div style={{ padding: '5px' }}>
                    <input 
                        type="number" 
                        id="quantity"  
                        style={{ color: 'white', padding: '5px'}} 
                        name="quantity" 
                        min="1" 
                        max="10"
                    />
                     <input 
                        type="number" 
                        id="quantity"  
                        style={{ color: 'white', padding: '5px'}} 
                        name="quantity" 
                        min="1" 
                        max="10"
                    />
                     <input 
                        type="number" 
                        id="quantity"  
                        style={{ color: 'white', padding: '5px'}} 
                        name="quantity" 
                        min="1" 
                        max="10"
                    />
                    </div>

                    <div style={{ padding: '5px' }}>
                    <input 
                        type="submit"  
                        style={{ color: 'white'}}
                    />
                    </div>
                </form>
            </div>

        </div>
    )
};

const array = (e) => {
    e.preventDefault();

    alert(`${e.target[0].value}${e.target[1].value}${e.target[2].value}`)
    arrayBox = <div><h1 style={{ color: 'white'}}>Hi</h1></div>;
}

export default Dsa;