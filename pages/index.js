import { Sorting } from '../components/Sorting'
import { Home } from './LandingPage'
import SSRProvider from 'react-bootstrap/SSRProvider'
import { io } from 'socket.io-client'
import Head from 'next/head'


export async function getStaticProps()  {
    return {
        props: {
            heading: 'Algorithms',
        },
    };
}

export default function init({heading}) {
    const socket = io('http://localhost:3000');
    socket.on('message', handleInit);
    return (
         <div>
            <Head>
                <title id="title">{heading}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="../public/site.webmanifest"></link>
            </Head>
            <main>
                <SSRProvider>
                    <Home></Home>
                </SSRProvider>
            </main>
         </div>
     );    

 }

 function handleInit(msg) {
    console.log(msg)
}
