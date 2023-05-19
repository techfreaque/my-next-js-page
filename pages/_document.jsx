import { Html, Head, Main, NextScript } from 'next/document'
import { NextStrictCSP } from 'next-strict-csp'

const HeadCSP = process.env.NODE_ENV === 'production' ? NextStrictCSP : Head
export default function Document() {
    return (
        <Html lang='en'>
            <HeadCSP>
                {process.env.NODE_ENV === 'production' &&
                    <meta httpEquiv="Content-Security-Policy" />}
            </HeadCSP>
            <body style={{margin: 0, padding: 0}}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
