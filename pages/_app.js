import {useEffect, useState} from 'react';
import Head from 'next/head'
import '../styles/globals.css';
import NavBar from '../components/NavBar/Header';
import FooterContent from '../components/Footer';
import LoadingCat from '../components/LoadingCat/LoadingCat';
import {pageColors} from '../components/colorPalette';
import {ConfigProvider} from 'antd';

export default function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false)
    }, []);
    const theme = {
        token: {
            colorPrimary: pageColors.primary
        }
    };
    return (
        <div style={
            {position: "relative"}
        }>
            <LoadingCat loading={loading}/>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <ConfigProvider theme={theme}>

                    <NavBar/>
                    <div style={
                        {marginTop: "50px"}
                    }>
                        <Component {...pageProps}/>
                    </div>
                    <FooterContent/>
                </ConfigProvider>
            </div>
        </div>
    )
}
