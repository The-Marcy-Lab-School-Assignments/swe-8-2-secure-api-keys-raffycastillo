//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { handleFetch } = require('./handleFetch')

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToDistFolder = path.join(__dirname, '../frontend/dist');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToDistFolder);

app.use(serveStatic);

const giphyBaseURL = `https://api.giphy.com/v1/gifs`;

app.get('/api/gifs', async (req, res) => {
  const { search } = req.query;
  let data, error;
  if (!search) [data, error] = await handleFetch(`${giphyBaseURL}/trending?api_key=${process.env.API_KEY}&limit=3`);
  else [data, error] = await handleFetch(`${giphyBaseURL}/search?api_key=${process.env.API_KEY}&q=${search}&limit=3`);
  if (error) return res.status(404).send(error);
  return res.status(200).send(data);
})

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
