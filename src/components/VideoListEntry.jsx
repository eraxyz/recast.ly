import VideoPlayer from './VideoPlayer.js';

var VideoListEntry = (props) => {

var onVideoClick = (that, event) => {
    let $title = $(event.target).text()
    var correctVid = that.props.data.filter((video) => video.snippet.title === $title)

    that.setState({
      selected: correctVid[0]
    });

    <VideoPlayer video={correctVid[0]} state={that.state}/>
      console.log('this is', correctVid[0])
  }

return(
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={onVideoClick.bind(props.that, props.that)}>{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);



}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;