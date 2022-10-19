import { Sorting } from '../components/Sorting'
import { Home } from './LandingPage'
import SSRProvider from 'react-bootstrap/SSRProvider'
import { io } from 'socket.io-client'

export default function init() {
    const socket = io('http://localhost:3000');
    socket.on('message', handleInit);
    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"></link>
    return (
         <div>
            <SSRProvider>
             <Home></Home>
            </SSRProvider>
         </div>
     );    

 }

 function handleInit(msg) {
    console.log(msg)
}
