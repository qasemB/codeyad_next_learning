export default function MyApp({ Component, pageProps }) {
    return (
        <>
            header
            <Component {...pageProps} />
            footer
        </>
    )
}