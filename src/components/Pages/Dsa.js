//Basic imports
import React, { Component, useState, useEffect } from 'react';
//Custom IMPORTS: 
import '../PageCss/HeaderSection.css';

import meme from '../../icons/memearray.jpg';
import meme2 from '../../icons/Linearpic.png';
import DScheat from '../../icons/DSCheat.png';
import DSsearch from '../../icons/DSSearch.png';
import DSsort from '../../icons/DSSort.png';

//Custom Package import?
const Dsa = () => {

    const [windowSize, setWindowSize] = useState(false);

    useEffect(() => {
        //Initialize
        const mq = window.matchMedia("(max-width: 1000px)");
        setWindowSize(mq.matches);
    
        //Update
        function updateSize(e) {
          setWindowSize(e.matches);
          console.log(mq.matches);
        }
    
        mq.addEventListener("change", updateSize);
    
        return function clean() {
          mq.removeEventListener("change", updateSize);
        };
      }, []);

    let cardOrientation;
    let cardWidth;
    let cardWidthChoice;
    let FontSizeLarge;
    let FontSizeMedium;

    if (windowSize) {

        cardOrientation = 'column';
        cardWidth = '100%';
        cardWidthChoice = '100%';
        FontSizeLarge = '60px';
        FontSizeMedium = 'medium';

    }
    else {

        cardOrientation = 'row';
        cardWidth = '95%';
        cardWidthChoice = '33%';
        FontSizeLarge = '100px';
        FontSizeMedium = 'x-large';

    }

    const [menuArray, setMenuArray] = useState(false);
    const [changeArray, setChangeArray] = useState();
    const [arrayMessage, setArrayMessage] = useState('');
    const [arrayElements, setArrayElements] = useState('');
    const [memeArray, setMemeArray] = useState();
    const [linearSearch, setLinearSearch] = useState(false);
    const [selectionSort, setSelectionSort] = useState(false);
    const [bubbleSort, setBubbleSort] = useState(false);

    const userArray = [];
    const demonstrationArray = [];
    let linearSearchElement;

    // Array function to handle form submit and choose algo 
    const array = (e) => {
        e.preventDefault();
        console.log(
            "Algorithm chosen\n",
            " \n Selection sort\t", selectionSort,
            "\n Linear search\t", linearSearch,
            "\n Bubble sort\t", bubbleSort,

            "\n\nEvent target 0\t", e.target[0].value,
            "\nEvent target 1\t", e.target[1].value,
            "\nEvent target 2\t", e.target[2].value,
            "\nEvent target 3\t", e.target[3].checked,
            "\nEvent target 4 \n\tlinear search element\t", e.target[4].value,
            "\nEvent target 5\t", e.target[5].value,
            "\nEvent target 6\t", e.target[6].value,
            "\nEvent target 7\t", e.target[7].value,

            "\n Length: \t", e.target.length,
        )

        let count = 0;
        let linearSearchCount = 0;
        let colorFlag = 0;

        if (linearSearch) {


            if (e.target[4].value === '') {
                alert("Must enter value for linear search... exiting");
                return false;
            }

            console.log("Starting Linear Search algorithm....");
            e.target[5].checked = false;
            e.target[7].checked = false;

            // Fill array with user selected data which is events 1-3  , so 9 events - 6   = 3 
            for (let i = 0; i < e.target.length - 6; i++) {
                if (!(e.target[i].value === '')) {
                    userArray.push(e.target[count].value);
                    console.log("User array is : ", userArray);
                }
                count++;
            }

            console.log("User array finished");

            linearSearchElement = e.target[4].value;

            // Change array values to match user input 
            setChangeArray(
                <div style={{
                    display: 'flex',
                    textAlign: 'center', alignItems: 'center', alignSelf: 'center',
                    flexDirection: 'column',
                    width: '100%',
                    position: 'center',
                    padding: '5px'
                }}>
                    <div
                        className='end-div3'
                        style={{
                            flexDirection: 'row',
                            padding: '5px',
                            width: '50%',
                            height: '50%',
                            position: 'center',
                            paddingBottom: '10px',
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
                    <h1 style={{ color: 'black', paddingLeft: '5px', fontWeight: 'bold' }}>
                        Search element

                    </h1>
                    <div
                        className='end-div3'
                        style={{
                            flexDirection: 'column',
                            padding: '5px',
                            width: '100%',
                            height: '50%',
                            position: 'center',
                            background: 'none',
                            textalign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            alignSelf: 'center',
                            border: 'none'

                        }}
                    >

                        <h1 style={{ color: 'white', padding: '10px' }}>
                            <div style={{ backgroundColor: 'black', height: '50px', width: '50px', border: '2px solid red', margin: '5px' }}>
                                {linearSearchElement}
                            </div>
                        </h1>
                    </div>
                </div>
            );

            // If user didnt enter blank values, show value, then  show meme, then reset the message...
            if (!((e.target[0].value || e.target[1].value || e.target[2].value) === '')) {

                setArrayMessage("Algorithm:\n1 Start from the leftmost element of arr[] and one by one compare x with each element of arr[]\n2 If x matches with an element, return the index.\n3 If x doesn’t match with any of the elements, return -1.\n");
                setMemeArray(<img src={meme2} width='80%' height='auto' style={{ padding: '5px' }} />)

                setTimeout(() => {
                    setMemeArray();
                    setArrayMessage();
                    setChangeArray();
                }, 30000);


                setTimeout(() => {
                    setArrayMessage();

                    setArrayMessage(`Your array is: \n${userArray} \nand your search element for the algorithm was \n${linearSearchElement}`);
                }, 8000);

                setTimeout(() => {
                    setArrayMessage();
                    setArrayMessage(`Now searching array with search element x = \n${linearSearchElement}`);
                    console.log(" Starting Search");
                }, 16000);


                setTimeout(() => {
                    setArrayMessage();
                    colorFlag = 0;
                    setArrayMessage(`Step 1: Start from leftmost element of array and one by one compare \n${linearSearchElement} with each element of array `);
                    //1 Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
                    for (let i = 0; i < userArray.length; i++) {
                        if (!(userArray[i] === null)) {

                            if (userArray[i] === linearSearchElement) {
                                setArrayMessage(` X matches element ${linearSearchElement}, found at position ${linearSearchCount}`);
                                console.log(" 1 value in user array is", userArray[i]);
                                demonstrationArray.push(userArray[i]);
                                console.log(" 1 value in demo array is", demonstrationArray[i]);
                                colorFlag = i;

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
                                        {colorFlag === 0 ?
                                            <h1 style={{ color: 'lightgreen' }}>
                                                <div style={{ backgroundColor: 'black', height: '50px', width: '50px', border: '1px solid white' }}>
                                                    {userArray[0]}
                                                </div>
                                            </h1>
                                            :
                                            <h1 style={{ color: 'white' }}>
                                                <div style={{ backgroundColor: 'black', height: '50px', width: '50px', border: '1px solid white' }}>
                                                    {userArray[0]}
                                                </div>
                                            </h1>
                                        }

                                        {colorFlag === 1 ?
                                            <h1 style={{ color: 'lightgreen' }}>
                                                <div style={{ backgroundColor: 'black', height: '50px', width: '50px', border: '1px solid white' }}>
                                                    {userArray[1]}
                                                </div>
                                            </h1>
                                            :
                                            <h1 style={{ color: 'white' }}>
                                                <div style={{ backgroundColor: 'black', height: '50px', width: '50px', border: '1px solid white' }}>
                                                    {userArray[1]}
                                                </div>
                                            </h1>
                                        }

                                        {colorFlag === 2 ?
                                            <h1 style={{ color: 'lightgreen' }}>
                                                <div style={{ backgroundColor: 'black', height: '50px', width: '50px', border: '1px solid white' }}>
                                                    {userArray[2]}
                                                </div>
                                            </h1>
                                            :
                                            <h1 style={{ color: 'white' }}>
                                                <div style={{ backgroundColor: 'black', height: '50px', width: '50px', border: '1px solid white' }}>
                                                    {userArray[2]}
                                                </div>
                                            </h1>
                                        }


                                    </div>
                                );

                                return;
                            }
                            else {
                                setArrayMessage(" Search element X does not match any position in the array !");
                                console.log("2 Not found for: ", userArray[i]);
                                console.log("2 User array is : ", userArray);

                                setChangeArray(
                                    <div
                                        style={{
                                            display: 'flex',
                                            textAlign: 'center', alignItems: 'center', alignSelf: 'center',
                                            flexDirection: 'column',
                                            width: '100%',
                                            position: 'center',
                                            padding: '5px'
                                        }}>
                                        <div
                                            className='end-div3'
                                            style={{
                                                flexDirection: 'row',
                                                padding: '5px',
                                                width: '50%',
                                                height: '50%',
                                                position: 'center',
                                                paddingBottom: '10px',
                                            }}
                                        >
                                            <h1 style={{ color: 'red' }}>
                                                <div style={{ backgroundColor: 'black', height: '50px', width: '50px', border: '1px solid white' }}>
                                                    {linearSearchElement}
                                                </div>
                                            </h1>

                                        </div>

                                    </div>
                                );
                            }
                        }
                        else {
                            setArrayMessage(` Your array is empty`);
                        }
                        linearSearchCount++;
                    }

                }, 20000);

            }
            else {
                setMemeArray();
                setArrayMessage();
                setChangeArray();
                alert("Empty array!");
                return;
            }

        }
        else if (selectionSort) {
            console.log("algo", "selection");
            e.target[3].checked = false;
            e.target[7].checked = false;
        }
        else if (bubbleSort) {
            console.log("algo", "bubble");
            e.target[3].checked = false;
            e.target[5].checked = false;
        }
        else {

            // Fill array with user selected data which is events 1-3  , so 9 events - 6   = 3 
            for (let i = 0; i < e.target.length - 6; i++) {
                if (!(e.target[i].value === '')) {
                    userArray.push(e.target[count].value);
                }
                count++;
            }

            // If user didnt enter blank values, show value, then  show meme, then reset the message...
            if (!((e.target[0].value || e.target[1].value || e.target[2].value) === '')) {

                setArrayMessage(`Array is: ${userArray}`);
                setMemeArray(<img src={meme} width='40%' height='auto' style={{ padding: '5px' }} />)

                setTimeout(() => {
                    setArrayMessage();
                    setChangeArray();
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
                //Wait for user to see all messages
                setTimeout(() => {
                    setArrayElements();
                }, 2000);
                setTimeout(() => {
                    setMemeArray();
                }, 8000);
            }
            else {
                setMemeArray();
                setArrayMessage();
                setChangeArray();
                alert("Empty array!");
                return;
            }

            // Change array values to match user input 
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
    }

    return (
        <div className='gio-main' style={{ display: 'flex', flex: 1, flexDirection: 'column', textAlign: 'center', alignItems: 'center', alignSelf: 'center' }} >
            <div className='dsaMenu' style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 50px', width: `${cardWidth}`, marginTop: '20px', marginBottom: '20px', border: '5px solid black' }}>
                <h2
                    style={{ color: 'white', fontSize: 'xx-large' }}
                >
                    Interactive and informative JSX implementation of DSA.
                </h2>

                <img src={DScheat} width='100%' height='auto' style={{ padding: '1px', marginBottom: '5px' }} />

                <h4 style={{ color: 'white', backgroundColor: 'black', fontSize: 'large' }}>
                    All DS follow 4 basic operations. <br/><b>Access, Searching, Inserting, and Deletion</b>.<br/> Some perform better than others. This is judged by Time & Space complexity. We test the lower bound of each DS to find worst & average cases. The notation to describe this is referred to as <br/>BIG O.
                </h4>

                <img src={DSsearch} width='100%' height='auto' style={{ padding: '1px', marginBottom: '5px'  }} />
                <img src={DSsort} width='100%' height='auto' style={{ padding: '1px', marginBottom: '5px'  }} />

                <h4 style={{ color: 'white', backgroundColor: 'black', fontSize: 'large' }}>
                   This also applies to searching & sorting algorithm's
                </h4>


                <h4 style={{ color: 'white', backgroundColor: 'black', fontSize: 'xx-large' }}>
                    Data Structures & Algorithms
                </h4>
                <div className='dsaMenu3' style={{ width: '50%' }}>

                    <div className='dsaMenu2' style={{ width: '90%' }} >
                        <p style={{ color: 'white', backgroundColor: 'black', fontSize: 'xx-large', padding: '10px' }}>Data Structures</p>
                        <ul style={{ listStyle: 'none', paddingTop: '5px', fontSize: 'x-large' }}>
                            <li><input onClick={() => { setMenuArray(!menuArray); window.scrollTo(99999, 99999); console.log("Array DS toggled") }} type='checkbox' /><label><br />Array</label></li>
                            <li><input type='checkbox' /><label><br />Marix</label></li>
                            <li><input type='checkbox' /><label><br />Linked List</label></li>
                        </ul>
                    </div>

                    <div className='dsaMenu2' style={{ width: '90%' }}>
                        <p style={{ color: 'white', backgroundColor: 'black', fontSize: 'xx-large', padding: '10px' }}>Algorithms</p>
                        <ul style={{ listStyle: 'none', fontSize: 'x-large' }}>
                            <li>Linear Search</li>
                            <li>Selection Sort</li>
                            <li>Bubble Sort</li>
                        </ul>
                    </div>

                </div>
            </div>

            {menuArray ?
                <>
                    <h2
                        style={{ color: 'black', fontWeight: 'bold', lineSpacing: '5px', margin: '5px', fontSize: 'xx-large', border: '5px solid black' }}
                    >
                        Data structure chosen : Array [ ]
                    </h2>

                    <div>
                        {memeArray}
                        <h2
                            style={{ color: 'black' }}
                        >
                            {arrayElements}
                        </h2>
                        <h2
                            style={{ color: 'black' }}
                        >
                            {changeArray}
                        </h2>
                        <h2
                            style={{ color: 'black' }}
                        >
                            {arrayMessage}
                        </h2>

                    </div>

                    <div className='gio-container-2' style={{ width: `${cardWidthChoice}`, marginBottom: '50px', border: '10px solid black' }}>
                        <form
                            onSubmit={array}
                        >
                            <label
                                for="quantity"

                            >
                                <h4 style={{ color: 'white', fontSize: 'large' }}>
                                    Enter 3 numbers between (1-10):
                                </h4>
                            </label>
                            <div className='gio-container' style={{
                                flexDirection: 'row',
                                padding: '10px',
                                width: '100%',
                                height: '100%',
                                position: 'center',
                                backgroundColor: '#101730ff'
                            }}>
                                <input
                                    type="number"
                                    id="quantity1"
                                    style={{ color: 'white', padding: '10px', }}
                                    name="quantity1"
                                    min="1"
                                    max="10"
                                />
                                <input
                                    type="number"
                                    id="quantity2"
                                    style={{ color: 'white', padding: '10px' }}
                                    name="quantity2"
                                    min="1"
                                    max="10"
                                />
                                <input
                                    type="number"
                                    id="quantity3"
                                    style={{ color: 'white', padding: '10px' }}
                                    name="quantity3"
                                    min="1"
                                    max="10"
                                />
                            </div>

                            <div style={{ width: '100%' }} >

                                <div className='gio-container' style={{
                                    flexDirection: 'column',
                                    background: 'black',
                                    position: 'center'
                                }}>
                                    <h2 style={{ color: 'white', fontSize: 'large' }}>
                                        Optional: Choose 1 algorithm
                                    </h2>
                                    <div className='gio-container'
                                        style={{
                                            flexDirection: 'row',
                                            padding: '5px',
                                            width: '100%',
                                            background: 'black',
                                            position: 'center'
                                        }}>

                                        <input
                                            onClick={() => {
                                                setLinearSearch(!linearSearch);
                                                setSelectionSort(false);
                                                setBubbleSort(false);
                                            }}
                                            type="checkbox"
                                            id="linear"
                                            name="linear"

                                        />
                                        {!linearSearch ?
                                            <label for="linear" style={{ color: 'white', fontSize: 'large' }}>Linear Search</label>
                                            :
                                            <label for="linear" style={{ color: 'red', fontSize: 'large' }}>Input what to search 👉</label>
                                        }
                                        {!linearSearch ?
                                            <></>
                                            :
                                            <input

                                                type="number"
                                                id="searchElement"
                                                style={{ color: 'white', padding: '5px' }}
                                                name="searchElement"
                                                min="1"
                                                max="10"
                                            />
                                        }

                                    </div>

                                    {!linearSearch ?
                                        <></>
                                        :
                                        <><a href="https://www.geeksforgeeks.org/linear-search/" style={{ color: 'lightgreen', fontSize: 'large', textDecoration: 'underline', cursor: 'pointer' }}>Geeks 4 Geeks</a><label style={{ color: 'white', fontSize: 'large' }}>Time Complexity: <b>O(N)</b></label></>
                                    }

                                    <div className='gio-container' style={{
                                        flexDirection: 'row',
                                        padding: '5px',
                                        width: '100%',
                                        height: '50%',
                                        background: 'black',
                                        position: 'center'
                                    }}>
                                        <input onClick={() => {
                                            setSelectionSort(!selectionSort);
                                            setLinearSearch(false);
                                            setBubbleSort(false);
                                        }}
                                            type="checkbox"
                                            id="selectionSort"
                                            name="selectionSort"
                                        />
                                        {!selectionSort ?
                                            <label for="selectionSort" style={{ color: 'white', fontSize: 'large' }}>Selection Sort</label>
                                            :
                                            <label for="selectionSort" style={{ color: 'red', fontSize: 'large' }}>Great for small lists,<br /> but underperforms compared to bubble sort</label>
                                        }
                                    </div>

                                    {!selectionSort ?
                                        <></>
                                        :
                                        <><a href="https://www.geeksforgeeks.org/linear-search/" style={{ color: 'lightgreen', fontSize: 'large', textDecoration: 'underline', cursor: 'pointer' }}>Geeks 4 Geeks</a><label style={{ color: 'white', fontSize: 'large' }}>Time Complexity: <b>O(N2)</b><br />One loop to select an element of Array one by one = O(N)
                                            <br />Another loop to compare that element with every other Array element = O(N)</label></>
                                    }

                                    <div className='gio-container' style={{
                                        flexDirection: 'row',
                                        padding: '5px',
                                        width: '100%',
                                        height: '50%',
                                        background: 'black',
                                        position: 'center'
                                    }}>
                                        <input onClick={() => {
                                            setBubbleSort(!bubbleSort);
                                            setSelectionSort(false);
                                            setLinearSearch(false);
                                        }}
                                            type="checkbox"
                                            id="bubbleSort"
                                            name="bubbleSort"
                                        />
                                        {!bubbleSort ?
                                            <label for="bubbleSort" style={{ color: 'white', fontSize: 'large' }}>Bubble Sort</label>
                                            :
                                            <label for="bubbleSort" style={{ color: 'red', fontSize: 'large' }}>Due to its simplicity, <br />bubble sort is often used to introduce<br /> the concept of a sorting algorithm.
                                            </label>
                                        }
                                    </div>

                                    {!bubbleSort ?
                                        <></>
                                        :
                                        <><a href="https://www.geeksforgeeks.org/linear-search/" style={{ color: 'lightgreen', fontSize: 'large', textDecoration: 'underline', cursor: 'pointer' }}>Geeks 4 Geeks</a><label style={{ color: 'white', fontSize: 'large' }}>Time Complexity: <b>O(N2)</b></label></>
                                    }
                                </div>

                                <div style={{ padding: '10px' }}>
                                    <input
                                        type="submit"
                                        style={{ color: 'white', cursor: 'pointer' }}
                                        value="Start"
                                    />
                                    <label ></label>
                                    <input onClick={() => { setLinearSearch(false); setSelectionSort(false); setBubbleSort(false) }}
                                        type="reset"
                                        style={{ color: 'white', cursor: 'pointer' }}
                                    />
                                </div>

                                <h4 style={{ color: 'white', fontSize: 'large' }}>
                                    more soon...
                                </h4>

                            </div>
                        </form>
                    </div >
                </>
                :
                <></>
            }


        </div >
    )
};

export default Dsa;