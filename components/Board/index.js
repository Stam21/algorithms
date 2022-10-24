import styles from './styles.module.css';
import React from "react"; 
import { useEffect, useState } from 'react'
import { search } from './astar'


export const Board = () => {
        
                var rowsData1 = {
                    rows: 7 ,
                    columns: 7,
                };
                let rows = [];
                let randomPosx = [];
                let randomPosy = [];
                while(randomPosx.length < 4){
                    var rx = Math.floor(Math.random() * rowsData1["rows"] );
                    var ry = Math.floor(Math.random() * rowsData1["columns"]);
                    if(randomPosx.indexOf(rx) === -1) randomPosx.push(rx);
                    if(randomPosy.indexOf(ry) === -1) randomPosy.push(ry);
                }
                
                var players = {
                        spaces: {
                            randomPos: [],
                            doors: [],
                            // array that shows the content of the box
                            // 0 has no content , 1 - 4 are the players and 5 is another totem
                            totem:[], 
                        }
                };
                let placed = {
                    twowayc:16,
                    twowayo:12,
                    threeway:18,
                    players:4,
                    current:false
                };
                for (var i = 0; i < 50; i++){
                    placed.current = false;
                    while (!placed.current) {
                        var rx = Math.floor(Math.random() * rowsData1["rows"] );
                        var ry = Math.floor(Math.random() * rowsData1["columns"]);
                        var block = Math.floor(Math.random() * 4);
                        if(!players.spaces.randomPos.includes([rx,ry])) {
                            
                            
                            if (block === 1 && placed.twowayc > 0) {
                                players.spaces.doors.push("styles.twoc");
                                players.spaces.randomPos.push([rx,ry]);
                                placed.current = true;
                                placed.twowayc -=1;
                            }
                            else if (block === 2 && placed.twowayo > 0) {
                                players.spaces.doors.push("styles.twoo");
                                players.spaces.randomPos.push([rx,ry]);
                                placed.current = true;
                                placed.twowayo -=1;
                            }
                            else if (block === 3 && placed.threeway > 0) {
                                players.spaces.doors.push("styles.three");
                                players.spaces.randomPos.push([rx,ry]);
                                placed.current = true;
                                placed.threeway -=1;
                            }
                            else {
                                players.spaces.doors.push("styles.twop");
                                players.spaces.randomPos.push([rx,ry]);
                                placed.current = true;
                                placed.players -=1;
                            }
                        }
                        
                    }
                    players.spaces.totem.push(true);
                };
                console.log(players)
                
                var blocks = 0;
                for (var i = 0; i < rowsData1['rows']; i++){
                    let cell = [];
                    for (var j = 0; j < rowsData1['columns']; j++) {
                        let bool = true;
                        if (bool){
                            if (players.spaces.randomPos[blocks][0] === i && players.spaces.randomPos[blocks][1] === j ) {
                                cell.push(<td key={j} className={players.spaces.doors[blocks]}></td>);
                                bool = false;
                            }
                            else {
                                blocks++;
                                if( blocks>50){
                                    blocks = 0;
                                }
                            }
                            
                        }                               
                    }
                    rows.push(<tr key={i}>{ cell }</tr>);
                    
                };
        return(
            <div>
                <table>
                    <tbody id={styles.boardInner} >
                        {rows}
                    </tbody>
                </table>
            </div>
        )
             
};