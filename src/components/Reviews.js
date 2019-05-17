import React, { Component } from 'react'

export default class Reviews extends Component {
  constructor(props) {
    super(props)
    // debugger;
    console.log(props.product)
    this.state = {
       hidden: false
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
        hidden: !this.state.hidden
    })
  }
  
  render() {
    return (
      <div>
          <button onClick={this.handleClick}>
              {this.state.hidden ? 'Hide Reviews' : 'Show Reviews'}
          </button>
          <ul>
            {this.state.hidden && this.props.product.reviews.map((review, i)=> <li key={i} > {review.description}</li>)}
          </ul> 
      </div>
    )
  }
}


