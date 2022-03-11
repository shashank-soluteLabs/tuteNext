import React from 'react'
import Head from 'next/head'
// import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Script from 'next/script'
export default function first() {
    return (
        <>
            <Layout>

                <Head>
                    <title>First Post</title>
                </Head>
                {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
                <h1>Post Page</h1>
                <h2>
                    <Link href='/'>
                        <a>Back To Home</a>
                    </Link>
                </h2>
            </Layout>
        </>
    )
}
