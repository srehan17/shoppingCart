import React, {Component} from 'react';

class Likes extends Component {
  constructor() {
    super()
    this.state = {
      message: true,
      button: true
    }
  }

handleClick() {
  this.setState({
    message: !this.state.message,
    button: !this.state.button
      })
}

render() {

  return (
    <div>
    <button className={this.state.button ? "btn btn-primary": "btn btn-warning"} onClick={() => this.handleClick()}>
      {this.state.message ? "Like" :"Unlike" }
    </button>
</div>  )
}
}

export default Likes;
