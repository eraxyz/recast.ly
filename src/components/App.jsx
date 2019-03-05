import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      done: false,
      selected: {props.appdata[0]},
    };
  }


  render() {

    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <h5>
          
              <VideoPlayer video={props.appdata[0]} state.bind(this)={this.state}/>
          
            </h5>
          </div>
        </div>
        <div className="col-md-5">
          <div><h5>

            <VideoList videos={props.appdata} state.bind(this)={this.state}/>  


          </h5></div>
        </div>
      </div>
    </div>

  }
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
