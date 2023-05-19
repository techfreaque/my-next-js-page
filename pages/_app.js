import {useEffect, useState} from 'react';
import Head from 'next/head'
import {enquireScreen} from 'enquire-js';
import '../styles/globals.css';
import NavBar from '../components/NavBar/Header';
import FooterContent from '../components/Footer';


let isMobile = false;
enquireScreen((b) => {
    isMobile = b;
});

export default function MyApp({Component, pageProps}) {
    const [state, setState] = useState({isMobile, showShadow: false})

    useEffect(() => {
        enquireScreen((b) => {
            setState({
                isMobile: !!b
            });
        });

    }, [])


    function navToShadow(e) {
        setState({
            showShadow: e.mode === 'leave'
        });
    }
    return (
        <div style={{
            // maxWidth: "2600px", margin: "auto"
        }}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <NavBar/>
                <div style={{marginTop: "50px"}}>
                    <Component {...pageProps}
                        isMobile={
                            state.isMobile
                        }/>
                </div>
                <FooterContent/>
            </div>
        </div>
    )
}
