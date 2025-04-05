import {
  useState
} from 'react'

import {
  getGifsBySearch
} from '../adapters/giphyAdapters'

function GifSearch({ setGifs }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const [data, error] = await getGifsBySearch(searchTerm);
    if (error) {
      setErrorMessage('Error fetching GIFS...')
    } else {
      setGifs(data.data);
    }
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <div className='input-container' style={{ display: 'flex', flexDirection: 'column' }}>
        <p className='error=text' style={{ color: 'red' }}>{errorMessage}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="searchInput">Enter a Search Term </label>
          <input onChange={handleChange} type="text" className="form-control" id="searchInput" />
          <button type="submit" className="btn btn-success">Search</button>
        </form>
      </div>
    </>
  )
}

export default GifSearch
