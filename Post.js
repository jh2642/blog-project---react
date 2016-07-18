import React from 'react'
import Bullet from './Bullet'
//es6 modern js code (native js in form of jsx) does not run independ it needs the webpack running
class Post extends React.Component {
  //this creates our copy of it and extends the main components by the React.Component
  render() {
    //you do not need to ype the word function in here -above is really function render ()
    return <div>
      <img src={this.props.thumbnail} />
      <h1><a href="#">{this.props.headline}</a></h1>
      <h6>{this.props.time}</h6>
      <p>{this.props.story}</p>

      </div>

    //can only return 1 node. If you want more you have to put them in a div AND nest it in ()
  }
}

export default Post
