import { handleFetch } from './handleFetch.js'

// Send a fetch request to the /trending endpoint and return the top 3 results
export const getTrendingGifs = async () => {
  return await handleFetch(`http://localhost:8080/api/gifs`)
}

export const getGifsBySearch = async (searchTerm) => {
  return await handleFetch(`http://localhost:8080/api/gifs?search=${searchTerm}`)
}
