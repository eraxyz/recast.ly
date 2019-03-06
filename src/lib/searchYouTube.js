import YOUTUBE_API_KEY from '../config/youtube.js'

var searchYouTube = (options, callback) => {

  var max = options.max || 5

    $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=' + options.key + '&q=' + options.query +'&maxResults=' + max,
    type: 'GET',
    q: options.query,
    dataType: 'json',
    success: function(wow){ 
      return callback(wow.items);
    },
  })
}
export default searchYouTube;
