import styles from './styles.module.css';
import React from "react"; 
import { useEffect, useState } from 'react'
import { search } from './astar'


export function Board() {
        
        const [P1x, setP1x] = useState([]);
        const [gameon, setGamestate] = useState(false);
        useEffect(() => {
            if (!gameon) {
                setGamestate(true);
                var rowsData1 = {
                    rows: 5 ,
                    columns: 5,
                };
                let rows = [];
                
                console.log("hello");
                let randomPosx = [];
                let randomPosy = [];
                while(randomPosx.length < 4){
                    var rx = Math.floor(Math.random() * rowsData1["rows"] );
                    var ry = Math.floor(Math.random() * rowsData1["columns"]);
                    if(randomPosx.indexOf(rx) === -1) randomPosx.push(rx);
                    if(randomPosy.indexOf(ry) === -1) randomPosy.push(ry);
                }
                
                var players = {
                        player1: [randomPosx[0],randomPosy[0]],
                        player2: [randomPosx[1],randomPosy[1]],
                        arsenal: [randomPosx[2],randomPosy[2]],
                        hospital: [randomPosx[3],randomPosy[3]],
                };
                console.log("randomPosx: " + players.player1[0]);
                for (var i = 0; i < 2; i++)
                {   
                    let route1 = search(players.player1[0],players.player1[1],players.arsenal[0],players.arsenal[1]);
                    let route2 = search(players.arsenal[0],players.arsenal[1],players.hospital[0],players.hospital[1]);
                    console.log(route1);
                }
                
                for (var i = 0; i < rowsData1['rows']; i++){
                    let cell = [];
                    for (var j = 0; j < rowsData1['columns']; j++) {
                        if (players.player2[0]=== i && players.player2[1]=== j) {
                            cell.push(<td key={j} className={styles.squareup}> </td>);
                        }
                        else if (players.player1[0]=== i && players.player1[1]=== j) {
                            cell.push(<td key={j} className={styles.squareup}> </td>);
                        }
                        else if (players.arsenal[0]=== i && players.arsenal[1]=== j) {
                            cell.push(<td key={j} className={styles.squareleft}> </td>);
                        }
                        else if (players.hospital[0]=== i && players.hospital[1]=== j) {
                            cell.push(<td key={j} className={styles.squaredown}> </td>);
                        }
                        else {
                            cell.push(<td key={j} className={styles.square}> </td>);
                        }                                   
                    }
                    rows.push(<tr key={i}>{ cell }</tr>);
                    
                };
                setP1x(rows);
            };
        });
        return(
            <div>
                <table>
                    <tbody id={styles.boardInner} >
                        {P1x}
                    </tbody>
                </table>
            </div>
        )
             
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
};
