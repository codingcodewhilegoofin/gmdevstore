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
                        <th>MostRecentUpdate</th>
                        <th>UpcomingUpdates</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact)=>
                     <tr>
                        <td>{contact.Catagory}</td>
                        <td>{contact.MostRecentUpdate}</td>
                        <td>{contact.UpcomingUpdates}</td>
                        <td>{contact.Priority}</td>
                     </tr>
                    )}
                </tbody>
            </table>
            <h2>Create entry in table</h2>

            <div className="containercrud">
                <form >
                    <input className="specialinput" type="text" name="catagory" required="required" placeholder="Catagory" />
                    <input className="specialinput" type="text" name="MostRecentUpdate" required="required" placeholder="MRU" />
                    <input className="specialinput" type="text" name="UpcomingUpdates" required="required" placeholder="Upcoming" />
                    <input className="specialinput" type="text" name="Priority" required="required" placeholder="Priority" />
                    <button type="submit"> CREATE </button>
                </form>
            </div>
        </div>
)}
export default CrudTable