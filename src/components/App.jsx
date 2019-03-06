import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import key from '../config/youtube.js'
import Search from './Search.js'

class App extends React.Component{

  componentDidMount(){
    let query = 'wow';
    let options = {key: key, query:query};
    this.props.searchYouTube(options, (data) => {
      this.setState({
        selected: data[0],
        list: data,
      });
    })
  }

  constructor(props){
    super(props);
    console.log(props, props.data)
    this.state = {
      done: false,
      selected: undefined,
      list: props.data,
    };
  }


  render() {


    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> <Search state={this.state} that={this}/> </h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <h5>
          
              <VideoPlayer video={this.state.selected} state={this.state}/>
          
            </h5>
          </div>
        </div>
        <div className="col-md-5">
          <div><h5>

            <VideoList videos={this.state.list} state={this.state} that={this}/>  


          </h5></div>
        </div>
      </div>
    </div>
    );
  };
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
