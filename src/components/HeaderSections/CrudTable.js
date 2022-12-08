import react, { useState, useEffect } from 'react';
import '../PageCss/Crudtable.css';
import Fakedata2 from './fake-data2.json';

export const CrudTable = props => {

    const [contacts, setContacts] = useState(Fakedata2);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [editWindow, setEditWindow] = useState(false);
    const [editWindow2, setEditWindow2] = useState(false);

    let mainDivSize;
    let tableSize;
    let editBtnSize;
    let btnListDirection;

    if (windowSize[0] < 700) {
        mainDivSize = '100%';
        tableSize = '100%';
        editBtnSize = '100%';
        btnListDirection = 'column';
    }
    else {
        mainDivSize = '100%';
        tableSize = '100%';
        editBtnSize = '33%';
        btnListDirection = 'row';
    }

    const onClickCreate = () => {
        setEditWindow(!editWindow);
        setEditWindow2(false);
    }

    const onClickEdit = () => {
        setEditWindow(false);
        setEditWindow2(!editWindow2);
    }

    const onClickDelete = () => {
        alert('Delete');
    }


    useEffect(() => {

        function updateSize() {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
       
        return () => {
            window.removeEventListener('resize', updateSize);
        }
    }, [windowSize])

    return (
        <>
            <div className="tablethingdiv2" style={{ width: `${mainDivSize}`, border: '1px solid white' }}>
                <table style={{ width: `${tableSize}`, border: 'none' }}>
                    <thead style={{ border: 'none' }}>
                        <tr style={{ border: 'none' }}>
                            <th style={{ padding: '5px', border: '2px solid white', }}>Table Options</th>
                            <th style={{ padding: '5px', borderRight: '2px solid black', }}>Name</th>
                            <th style={{ padding: '5px', borderRight: '2px solid black', }}>Message</th>
                            <th style={{ padding: '5px', borderRight: '2px solid black', }}>Social</th>
                            <th style={{ padding: '5px', borderRight: '2px solid black', }}>Plug</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: 'none' }}>
                        {contacts.map((contact) =>
                            <tr style={{ border: 'none' }}>
                                <td style={{  border: '2px solid white' }}>
                                    <div className='gio-container-2' style={{ flexDirection: `${btnListDirection}`, padding: '0px', margin: '0px', border: '2px solid white' }}>
                                        <button onClick={() => onClickCreate()} style={{ width: `${editBtnSize}`, margin: '1px', backgroundColor: 'white' }}> 🆕 </button>
                                        <button onClick={() => onClickEdit()} style={{ width: `${editBtnSize}`, margin: '1px', backgroundColor: 'green' }}> ✏️ </button>
                                        <button onClick={() => onClickDelete()} style={{ width: `${editBtnSize}`, margin: '1px', backgroundColor: 'red' }}> 💣 </button>
                                    </div>

                                </td>
                                <td style={{ borderRight: '2px solid black', padding: '25px' }}>
                                    {contact.Catagory}
                                </td>
                                <td style={{ borderRight: '2px solid black', padding: '25px',backgroundColor: 'black', color: 'red' }}>
                                    <h3 syle={{ color: 'red', fontWeight: '900',}}>
                                        {contact.MostRecentUpdate}
                                    </h3>
                                </td>
                                <td style={{ borderRight: '2px solid black', padding: '25px' }}>
                                    {contact.UpcomingUpdates}
                                </td>
                                <td style={{ borderRight: '2px solid black', padding: '25px' }}>
                                    {contact.Priority}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className={editWindow ? "gio-container" : ""} style={{ width: `${mainDivSize}`, margin: '5px', border: 'none', background: 'none' }}>

                {editWindow ?
                    <>
                        <div style={{ width: "100%", height: "100%", backgroundColor: 'black', padding: '10px' }}>
                            <p style={{ color: 'white' }}>Create record</p>
                            <input type="text" style={{ border: 'none', width: `${mainDivSize}`, backgroundColor: 'white', borderRadius: '10px' }} />
                        </div>
                    </>
                    :
                    <></>
                }
            </div>

            <div className={editWindow2 ? "gio-container" : ""} style={{ width: `${mainDivSize}`, margin: '5px', border: 'none', background: 'none' }}>

                {editWindow2 ?
                    <>
                        <div style={{ width: "100%", height: "100%", backgroundColor: 'black', padding: '10px' }}>
                            <p style={{ color: 'white' }}> Edit record </p>
                            <input type="text" style={{ border: 'none', width: `${mainDivSize}`, backgroundColor: 'white', borderRadius: '10px' }} />
                        </div></>
                    :
                    <></>
                }
            </div>
        </>
    )
}
export default CrudTable