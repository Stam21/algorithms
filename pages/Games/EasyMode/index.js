
import React from "react";
import styles from './styles.module.css'; 
  
function Easy() {
        const rowsData1 = {rows: 5, columns:5};
        let rows = [];
        for (var i = 1; i <= rowsData1['rows']; i++){
            let cell = [];
            for (var j = 1; j <= rowsData1['columns']; j++) {
                cell.push(<td key={j} className={styles.square}> </td>);
            }
            rows.push(<tr key={i}>{ cell }</tr>);
        }
    //assigning ref
        return(
            <div>
                <table>
                    <tbody id={styles.boardInner} >
                        {rows}
                    </tbody>
                </table>
            </div>
        )
}



export default Easy;