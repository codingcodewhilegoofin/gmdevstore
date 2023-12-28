import '../PageCss/GioTable.css';

const data =
[
    {
        "Catagory":"API's",
        "Most Recent Update": "Open AI bot",
        "Upcoming Updates": "Financial API, OpenAI Bot, Spotify API",
        
    },
    {
        "Catagory":"Structure and UI",
        "Most Recent Update": "Integrating threeJS 3D environment",
        "Upcoming Updates": "Develop 3D environment and research",
       
    },
    {
        "Catagory":"Integrated projects",
        "Other Websites": "FullStackingDevelopment",
        "Audrino Projects": "Upcoming",
       
    }
]




export const GioTable = props =>{
   
    const columns = Object.keys(data[0]);

    return(
        <div className="tablethingdiv2">
            <table className="GioTable" cellPadding="10" cellSpacing="1">
                <thead>
                    <tr>
                        {columns.map( (heading) => <th>{heading}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr>
                            {columns.map( (column) => (
                                <td>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
)}
export default GioTable