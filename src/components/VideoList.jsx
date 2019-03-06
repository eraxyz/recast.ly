import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  console.log(props, props.videos)
  if(props.videos !== undefined && props.videos.length !== 0){
    return (
      <div className="video-list" >
        {props.videos.map((hello) => <VideoListEntry video={hello} that={props.that}/>)}
      </div>
    )
  } else {
    return (
      <div className="video-list"><em>Video List</em>
    </div>
    )
  }
}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
