import React from 'react'
import Bullet from './Bullet'
//es6 modern js code (native js in form of jsx) does not run independ it needs the webpack running
class Button extends React.Component {
  //this creates our copy of it and extends the main components by the React.Component
  render() {
    //you do not need to ype the word function in here -above is really function render ()
    return <div>

    <button type="button">{this.props.label}</button>
    <Bullet />
    <input style={styles} />
    </div>
    //can only return 1 node. If you want more you have to put them in a div AND nest it in ()
  }
}
Button.propTypes ={label: React.PropTypes.string.isRequired}
//this one makes something required

Button.defaultProps = {label: 'ClickMe'}
//this one makes a default property on a button without a label

export default Button
