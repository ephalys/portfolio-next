import Head from 'next/head'
import { KBarProvider } from 'kbar'
import '/styles/globals.css'

const _app = ({ Component, pageProps }) => {
    return (
        <KBarProvider>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                />
                <meta name="application-name" content="Léon Tran-Van" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Léon Tran-Van"
                />
                <title>Léon Tran-Van</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </KBarProvider>
    )
}

export default _app