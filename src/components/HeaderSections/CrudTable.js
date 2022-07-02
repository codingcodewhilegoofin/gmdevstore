import react,{useState} from 'react';
import '../PageCss/Crudtable.css';
import Fakedata from './fake-data.json';


export const CrudTable = props =>{
   
    const [contacts, setContacts] = useState(Fakedata);

    return(
        <div className="tablethingdiv2">
            <table>
                <thead>
                    <tr>
                        <th>Catagory</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact)=>
                     <tr>
                        <td>{contact.Catagory}</td>
                    
                     </tr>
                    )}
                </tbody>
            </table>
            <h2 style={{ color: 'white' }}>Create entry in table</h2>

            <div className="containercrud">
                <form >
                    <input className="specialinput" type="text" name="catagory" required="required" placeholder="Catagory" />

                    <button  style={{color:'#AEBEBEff',backgroundColor:'#101730ff'}}   type="submit"> CREATE </button>
                </form>
            </div>
        </div>
)}
export default CrudTable