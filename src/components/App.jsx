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
    this.state = {
      done: false,
      selected: undefined,
      list: props.data,
    };
  }


  handleSubmit(input) {
    searchYouTube({key: key, query: input}, (videos) => {this.setState({selected: videos[0], list: videos})});
  }

  onVideoClick(title) {
    var correctVid = this.state.list.filter((video) => video.snippet.title === title)

    this.setState({
      selected: correctVid[0]
    });

    <VideoPlayer video={correctVid[0]} />
  }


  render() {


    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> <Search handleSubmit={this.handleSubmit.bind(this)}/> </h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <h5>
          
              <VideoPlayer video={this.state.selected}/>
          
            </h5>
          </div>
        </div>
        <div className="col-md-5">
          <div><h5>

            <VideoList videos={this.state.list} onVideoClick={this.onVideoClick.bind(this)}/>  


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
