import React, { Component } from 'react';
import Head from 'next/head';

export default function Layout({children, pageSEOData}) {

    const appTitle = 'AJ'
    const appUrl = ''
    const appAuthor = 'Aleksa Jevtic'
    const appImage = ''

    const pageTitle = pageSEOData.title
    const pageDesc = pageSEOData.desc
    const pageCanonical = pageSEOData.canonical

    return(
        <div>
            <Head>
                <title>
                    {pageTitle + ' | ' + appTitle}
                </title>
                <link rel='icon' href='/favicon.ico' />
                <link rel='canonical' href={pageCanonical} />

                <meta name="title" property="og:title" content={pageTitle} />
                <meta name="image" property="og:image" content={appImage} />
                <meta name="description" property="og:description" content={pageDesc} />
                <meta name="author" content={appAuthor}/>

                {/* OG meta tags */}

                <meta property="og:type" content={'website'} />
                <meta name="og:title" content={pageTitle} />
                <meta name="og:image" content={appImage} />
                <meta name="og:url" content={appUrl} />
                <meta name="og:description" content={pageDesc} />

                {/* Twitter meta tags */}

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:creator" content={appAuthor} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDesc} />
                <meta name="twitter:image" content={appImage} />

            </Head>
            
            <main>
                {children}     
            </main>
        </div>
    )
}