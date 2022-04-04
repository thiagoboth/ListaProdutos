import { useState, useEffect } from 'react';

export function useFetch({ url, options }) {
    const [isLoading, setIsLoading] = useState(true);
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(url, options)
            .then(async (response) => {
                if(response.status !== 200) {
                    throw new Error(response.status);
                }

                const json = await response.json();
                setResponse(json);
            })
            .catch((error) => {
                setError(`Erro na requisição com status ${error.message}`);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [url])

    return { isLoading, response, error };
}