'use client'

import { useEffect } from 'react';

export default function Client() {

    const callApi = () => {
        fetch('https://graphql-server-client-nextjs.netlify.app/api/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: 'query ExampleQuery { hello }',
            }),
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    useEffect(() => {
        callApi();
    }, []);

    return (
        <>
            <p>...and see in the browser console</p>
        </>
    );
}