import {
  useState
} from 'react'

import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch';

function App() {
  const [gifs, setGifs] = useState([]);

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch setGifs={setGifs}></GifSearch>
        <br></br>
        <GifContainer gifs={gifs} setGifs={setGifs}/>
      </div>
    </div>
  );
}

export default App;
