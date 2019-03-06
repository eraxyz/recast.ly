var Search = (props) => {

  var handleSubmit = function(event){
    var formData = event.target
    console.log(event)
    // props.state.setState({value: event.target.value})  
  }


  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text"/>
      <button className="btn hidden-sm-down" onClick={handleSubmit.bind(props.that)} >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  )
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
