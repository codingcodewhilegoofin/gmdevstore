//Basic imports
import React, { Component, useState, useEffect } from 'react';
//Custom IMPORTS: 
import '../PageCss/HeaderSection.css';

import meme from '../../icons/memearray.jpg';

//Custom Package import?
const Dsa = () => {

    const [changeArray, setChangeArray] = useState();
    const [arrayMessage, setArrayMessage] = useState('');
    const [arrayElements, setArrayElements] = useState('');
    const [memeArray, setMemeArray] = useState();

    const userArray = [];

    const array = (e) => {
        e.preventDefault();

        let count = 0;
        console.log(e);

        for (let i = 0; i < e.target.length - 6; i++) {
            if (!(e.target[i].value === '')) {
                userArray.push(e.target[count].value);
            }
            count++;
        }

        if (!((e.target[0].value || e.target[1].value || e.target[2].value) === '')) {
            setArrayMessage(`Array is: ${userArray}`);
            setMemeArray(<img src={meme} width='40%' height='auto' style={{ padding: '5px' }} />)
            setTimeout(() => {
                setArrayMessage();
            }, 8000);
            setArrayElements(`First element is: ${userArray[0]}`);
            setTimeout(() => {
                setArrayMessage(`Length is: ${userArray.length}`);
            }, 4000);
            setTimeout(() => {
                if (!(userArray[1] === '')) {
                    setArrayMessage(`Second element is: ${userArray.at(1)}`);
                }
            }, 6000);
            setTimeout(() => {
                setArrayElements();
            }, 2000);
            setTimeout(() => {
                setMemeArray();
            }, 8000);
        }

        //console.log(e.target[4].checked)
        setChangeArray(
            <div
                className='end-div3'
                style={{
                    flexDirection: 'row',
                    padding: '5px',
                    width: '100%',
                    height: '50%',
                    position: 'center'
                }}
            >
                <h1 style={{ color: 'white' }}>
                    <div style={{ backgroundColor: 'black', height: '50px', width: '50px', border: '1px solid white' }}>
                        {userArray[0]}
                    </div>
                </h1>
                <h1 style={{ color: 'white' }}>
                    <div style={{ backgroundColor: 'black', height: '50px', width: '50px', border: '1px solid white' }}>
                        {userArray[1]}
                    </div>
                </h1>
                <h1 style={{ color: 'white' }}>
                    <div style={{ backgroundColor: 'black', height: '50px', width: '50px', border: '1px solid white' }}>
                        {userArray[2]}
                    </div>
                </h1>
            </div>
        );
    }

    return (
        <div className='gio-main' >
            <div className='dsaMenu'>
                <p
                    style={{ color: 'white' }}
                >
                    Interactive and informative JSX implementation of DSA.
                </p>

                <h4>
                    Data Structures & Algorithms
                </h4>
                <div className='dsaMenu3'>

                    <div className='dsaMenu2'>
                        <p>Data Structures</p>
                        <ul style={{ listStyle: 'square' }}>
                            <li>Array</li>
                            <li>Array</li>
                            <li>Array</li>
                        </ul>
                    </div>

                    <div className='dsaMenu2'>
                        <p>Algorithms</p>
                        <ul style={{ listStyle: 'square' }}>
                            <li>Linear Search</li>
                            <li>Selection Sort</li>
                            <li>Bubble Sort</li>
                        </ul>
                    </div>

                </div>
            </div>

            <h2
                style={{ color: 'white', fontWeight: 'bold', lineSpacing: '5px', margin: '5px' }}
            >
                Array
            </h2>

            <div>
                {memeArray}
                <h2
                    style={{ color: 'white' }}
                >
                    {arrayElements}
                </h2>
                <h2
                    style={{ color: 'white' }}
                >
                    {changeArray}
                </h2>
                <h2
                    style={{ color: 'white' }}
                >
                    {arrayMessage}
                </h2>

            </div>

            <div className='gio-container-2' style={{ width: '100%', }}>
                <form
                    onSubmit={array}

                >
                    <label
                        for="quantity"

                    >
                        <h4 style={{ color: 'white' }}>
                            Enter 3 numbers between (1-10):
                        </h4>
                    </label>
                    <div className='gio-container' style={{
                        flexDirection: 'row',
                        padding: '5px',
                        width: '100%',
                        height: '50%',
                        position: 'center',
                        backgroundColor: '#101730ff'
                    }}>
                        <input
                            type="number"
                            id="quantity1"
                            style={{ color: 'white', padding: '5px', }}
                            name="quantity1"
                            min="1"
                            max="10"
                        />
                        <input
                            type="number"
                            id="quantity2"
                            style={{ color: 'white', padding: '5px' }}
                            name="quantity2"
                            min="1"
                            max="10"
                        />
                        <input
                            type="number"
                            id="quantity3"
                            style={{ color: 'white', padding: '5px' }}
                            name="quantity3"
                            min="1"
                            max="10"
                        />
                    </div>

                    <div style={{ width: '100%', }} >

                        <div className='gio-container' style={{
                            flexDirection: 'column',

                            position: 'center'
                        }}>
                            <div className='gio-container' style={{
                                flexDirection: 'row',
                                padding: '5px',
                                width: '100%',

                                position: 'center'
                            }}>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" style={{ color: 'white' }}>Linear Search</label>
                                <input
                                    type="number"
                                    id="quantity4"
                                    style={{ color: 'white', padding: '5px' }}
                                    name="quantity4"
                                    min="1"
                                    max="10"
                                />
                            </div>
                            <div className='gio-container' style={{
                                flexDirection: 'row',
                                padding: '5px',
                                width: '100%',
                                height: '50%',
                                position: 'center'
                            }}>
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                <label for="vehicle2" style={{ color: 'white' }}>Selection Sort </label>
                            </div>

                            <div className='gio-container' style={{
                                flexDirection: 'row',
                                padding: '5px',
                                width: '100%',
                                height: '50%',
                                position: 'center'
                            }}>
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                <label for="vehicle3" style={{ color: 'white' }}>Bubble Sort</label>
                            </div>
                        </div>
                        <div style={{ padding: '10px' }}>
                            <input
                                type="submit"
                                style={{ color: 'white',cursor: 'pointer' }}
                                value="Start"
                            />
                            <label ></label>
                            <input
                                type="reset"
                                style={{ color: 'white',cursor: 'pointer' }}
                            />
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
};

export default Dsa;