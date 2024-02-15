'use client'

import { useEffect } from 'react';

export default function Client() {

    const callApi = () => {
        fetch(`${process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL}`, {
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

        fetch(`${process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: 'query ExampleQuery { numero }',
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