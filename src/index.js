// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import data from './data/exampleVideoData.js';
ReactDOM.render(<App appdata={data} />, document.getElementById('app'));