// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import data from './data/exampleVideoData.js';
import searchYouTube from './lib/searchYouTube.js';
import key from './config/youtube.js'

var options = {query:'cats and stuff', key: key, };

searchYouTube(options, (query) => {
  ReactDOM.render(<App searchYouTube={searchYouTube} data={query}/>, document.getElementById('app'));
});