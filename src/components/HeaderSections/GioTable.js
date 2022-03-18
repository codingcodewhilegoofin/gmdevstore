import '../PageCss/GioTable.css';

const data =
[
    {
        "Catagory":"Table Components",
        "Most Recent Update": "Added 2 tables. One uses the SWAP API. One is this table for update documentation",
        "Upcoming Updates": "Possibly a 3rd table",
        "Priority": "Low"
    },
    {
        "Catagory":"Structure",
        "Most Recent Update": "Re-organized main index file in order to provide 2 different web experiences",
        "Upcoming Updates": "Build new website!",
        "Priority": "High"
    },
    {
        "Catagory":"Mobile Compatibility / Responsiveness",
        "Most Recent Update": "Fixed Table Scroll",
        "Upcoming Updates": "Weird gaps, and sliding issues",
        "Priority": "Medium"
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