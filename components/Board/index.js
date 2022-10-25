import styles from './styles.module.css';
import React from "react"; 
import { useEffect, useState } from 'react'
import { search } from './astar'


export const Board = () => {
                const [board,setboardState] = useState([]);
                const [gameon,setgameState] = useState(false);
                const entities = {
                    bat:'../../public/boardIcons/bat.png',
                    dragon:'../../public/boardIcons/dragon.png',
                    candelab:'../../public/boardIcons/candelabrum.png',
                    rat:'../../public/boardIcons/rat.png',
                    beetle:'../../public/boardIcons/beetle.png',
                    ring:'../../public/boardIcons/ring.png',
                    lizard:'../../public/boardIcons/iguana.png',
                    potion:'../../public/boardIcons/potion.png',
                    spider:'../../public/boardIcons/tarantula.png',
                    book:'../../public/boardIcons/book.png',
                    owl:'../../public/boardIcons/owl.png',
                    key:'../../public/boardIcons/key.png',
                    knight:'../../public/boardIcons/knight.png',
                    panther:'../../public/boardIcons/panther.png',
                    unicorn:'../../public/boardIcons/unicorn.png',
                    ghost:'../../public/boardIcons/ghost.png',
                    amethyst:'../../public/boardIcons/amethyst.png',
                    genie:'../../public/boardIcons/genie.png',
                    sword:'../../public/boardIcons/sword.png',
                    pouch:'../../public/boardIcons/pouch.png',
                    grail:'../../public/boardIcons/grail.png',
                    crown:'../../public/boardIcons/crown.png',
                    coffer:'../../public/boardIcons/chest.png',
                    elf:'../../public/boardIcons/elf.png',
                };
                useEffect(() => {
                    if (!gameon) {
                        var rowsData1 = {
                            rows: 7 ,
                            columns: 7,
                        };
                        
                        var players = {
                                spaces: {
                                    randomPos: [],
                                    doors: [],
                                    // array that shows the content of the box
                                    // 0 has no content , 1 - 4 are the players and 5 is another totem
                                    totem:[],
                                    direction:[],
                                }
                        };
                        let placed = {
                            twoc:16,
                            twoo:12,
                            threeInside:6,
                            twop:4,
                            current:false
                        };
                        
                        placed.current = true;
                        let entitiesPushed = [0,0];
                        //function create static board
                        for (var i = 0; i < rowsData1.rows; i++) {
                            for (var j = 0; j < rowsData1.columns; j++) {
                                if (i%2 === 0  && j%2 === 0) {
                                    if (i===0 && j===0) {
                                        //push player 1 
                                        players.spaces.doors.push(styles.twop);
                                        players.spaces.randomPos.push([i,j]);
                                        players.spaces.totem.push("player");
                                        players.spaces.direction.push("bottomright");
                                        placed.twop -=1;
                                    }
                                    else if (i===0 && j===rowsData1.columns-1) {
                                        //push player 2
                                        players.spaces.doors.push(styles.twop);
                                        players.spaces.randomPos.push([i,j]);
                                        players.spaces.totem.push("player");
                                        players.spaces.direction.push("bottomleft");
                                        placed.twop -=1;
                                    }
                                    else if (i===rowsData1.rows-1 && j===0) {
                                        //push player 3
                                        players.spaces.doors.push(styles.twop);
                                        players.spaces.randomPos.push([i,j]);
                                        players.spaces.totem.push("player");
                                        players.spaces.direction.push("righttop");
                                        placed.twop -=1;
                                    }
                                    else if (i===rowsData1.rows-1 && j===rowsData1.columns-1) {
                                        //push player 4
                                        players.spaces.doors.push(styles.twop);
                                        players.spaces.randomPos.push([i,j]);
                                        players.spaces.totem.push("player");
                                        players.spaces.direction.push("lefttop");
                                        placed.twop -=1;
                                    }
                                    else {
                                        //push 3-way boxes with correct direction
                                        if (i === 0) {
                                            players.spaces.doors.push(styles.three);
                                            players.spaces.randomPos.push([i,j]);
                                            players.spaces.direction.push("bottom");
                                            var key = Object.keys(entities)[entitiesPushed[0]+ entitiesPushed[1]];     
                                            players.spaces.totem.push(entities[key]);
                                            entitiesPushed[0]+=1;
                                        }
                                        else if (i === rowsData1.rows-1) {
                                            players.spaces.doors.push(styles.three);
                                            players.spaces.randomPos.push([i,j]);
                                            players.spaces.direction.push("top");
                                            var key = Object.keys(entities)[entitiesPushed[0]+ entitiesPushed[1]];     
                                            players.spaces.totem.push(entities[key]);
                                            entitiesPushed[0]+=1;
                                        }
                                        else if (j === 0) {
                                            players.spaces.doors.push(styles.three);
                                            players.spaces.randomPos.push([i,j]);
                                            players.spaces.direction.push("right");
                                            var key = Object.keys(entities)[entitiesPushed[0]+ entitiesPushed[1]];     
                                            players.spaces.totem.push(entities[key]);
                                            entitiesPushed[0]+=1;
                                        }
                                        else if (j === rowsData1.columns-1){
                                            players.spaces.doors.push(styles.three);
                                            players.spaces.randomPos.push([i,j]);
                                            players.spaces.direction.push("left");
                                            var key = Object.keys(entities)[entitiesPushed[0]+ entitiesPushed[1]];     
                                            players.spaces.totem.push(entities[key]);
                                            entitiesPushed[0]+=1;
                                        }
                                        else {
                                            players.spaces.doors.push(styles.three);
                                            players.spaces.randomPos.push([i,j]);
                                            players.spaces.direction.push("left");
                                            var key = Object.keys(entities)[entitiesPushed[0]+ entitiesPushed[1]];     
                                            players.spaces.totem.push(entities[key]);
                                            entitiesPushed[0]+=1;
                                        }
                                    }
                                }
                                else {
                                    placed.current = false;
                                    while (!placed.current) {
                                            var direction = Math.floor(Math.random() * 4 + 1);
                                            var block = Math.floor(Math.random() * 3 + 1);
                                           
                                            if (block === 1 && placed.twoc > 0) {
                                                players.spaces.doors.push(styles.twoc);
                                                players.spaces.randomPos.push([i,j]);
                                                placed.current = true;
                                                if (direction === 1) {
                                                    players.spaces.direction.push("bottomright");
                                                }
                                                else if (direction === 2) {
                                                    players.spaces.direction.push("righttop");
                                                }
                                                else if (direction === 3) {
                                                    players.spaces.direction.push("lefttop");
                                                }
                                                else {
                                                    players.spaces.direction.push("bottomleft");
                                                }

                                                if (entitiesPushed[1]<= 6) {
                                                    var key = Object.keys(entities)[entitiesPushed[0]+ entitiesPushed[1]];     
                                                    players.spaces.totem.push(entities[key]);
                                                    entitiesPushed[1] += 1;
                                                }
                                                placed.twoc -=1;
                                            }
                                            else if (block === 2 && placed.twoo > 0) {
                                                players.spaces.doors.push(styles.twoo);
                                                players.spaces.randomPos.push([i,j]);
                                                if (direction === 1 || direction === 3) {
                                                    players.spaces.direction.push("bottomtop");
                                                }
                                                else {
                                                    players.spaces.direction.push("leftright");
                                                }              
                                                placed.current = true;
                                                placed.twoo -=1;
                                            }
                                            else if (block === 3 && placed.threeInside > 0) {
                                                players.spaces.doors.push(styles.three);
                                                players.spaces.randomPos.push([i,j]);
                                                placed.current = true;
                                                placed.threeInside -=1;
                                                if (direction === 1) {
                                                    players.spaces.direction.push("bottom");
                                                }
                                                else if (direction === 2) {
                                                    players.spaces.direction.push("right");
                                                }
                                                else if (direction === 3) {
                                                    players.spaces.direction.push("top");
                                                }
                                                else {
                                                    players.spaces.direction.push("left");
                                                }
                                                var key = Object.keys(entities)[entitiesPushed[0]+ entitiesPushed[1]];     
                                                players.spaces.totem.push(entities[key]);
                                                entitiesPushed[0] += 1;
                                            }
                                        
                                    }
                                }
                            }    
                        };
                        console.log(placed);
                        for (const [key,value] of Object.entries(placed)) {
                            if (value === 1) {
                                players.spaces.doors.push(styles+'.'+key);
                                players.spaces.randomPos.push([0,7]);
                                console.log(players)
                            }
                        }
                        
                        
                        var blocks = 0;
                        let rows = [];
                        console.log(players.spaces.randomPos);
                        for (var i = 0; i < rowsData1.rows; i++){
                            let cell = [];
                            for (var j = 0; j < rowsData1.columns; j++) {
                                    cell.push(<td key={j} className={players.spaces.doors[blocks]}></td>);
                                    blocks++;    
                            }
                            rows.push(<tr key={i}>{ cell }</tr>);
                        };
                        
                        setgameState(true);
                        setboardState(rows);
                    };
                });
                return(
                    <div>
                        <table>
                            <tbody id={styles.boardInner} >
                                {board}
                            </tbody>
                        </table>
                    </div>
                )
             
};