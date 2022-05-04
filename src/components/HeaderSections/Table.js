import '../PageCss/GioTable.css';


export const Table = props =>{
    console.log(props);

    const columns = Object.keys(props.data[0]);

    return(
        <div className="tablethingdiv">
            <table className="GioTable" cellPadding="10" cellSpacing="1">
                <thead>
                    <tr>
                        {columns.map( (heading) => <th>{heading}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row) => (
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
export default Table