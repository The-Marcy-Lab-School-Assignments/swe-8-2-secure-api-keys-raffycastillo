import {
  useEffect,
  useState
} from 'react'

import {
  getTrendingGifs
} from '../adapters/giphyAdapters';

function GifContainer({ gifs, setGifs }) {
    const [error, setError] = useState(null);

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await getTrendingGifs();
            if (error) {
                return setError(error);
            }
            setGifs(data.data);
        }
        doFetch();
    }, []);

    if (!gifs) {
        return (
            <div>
                <h3>Sorry, we couldn't fetch the gifs at this time.</h3>
            </div >
        )
    }

    return (
        <ul>
            {
                gifs.map((gif) => {
                    return <li key={gif.id}>
                        <img src={gif.images.original.url} alt="" />
                    </li>
                })
            }
        </ul>
    )
}

export default GifContainer
