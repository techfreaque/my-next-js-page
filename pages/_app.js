import {useEffect, useState} from 'react';
import Head from 'next/head'
import {enquireScreen} from 'enquire-js';
import '../styles/globals.css';
import NavBar from '../components/NavBar/Header';
import FooterContent from '../components/Footer';
import LoadingCat from '../components/LoadingCat/LoadingCat';

let isMobile = false;
enquireScreen((b) => {
    isMobile = b;
});

export default function MyApp({Component, pageProps}) {
    const [state, setState] = useState({isMobile, showShadow: false})
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false)
    }, []);
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
    return (<div style={
        {position: "relative"}
    }>
        <LoadingCat loading={loading} />
        <Head>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div>
            <NavBar/>
            <div style={
                {marginTop: "50px"}
            }>
                <Component {...pageProps}
                    isMobile={
                        state.isMobile
                    }/>
            </div>
            <FooterContent/>
        </div>
    </div>)
}
