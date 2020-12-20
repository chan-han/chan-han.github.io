import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                      crossOrigin="anonymous"/>
            </Head>
            <body>
            <div id="root">
                <Main/>
                <NextScript/>
            </div>
            </body>q
            </html>
        );
    }
}