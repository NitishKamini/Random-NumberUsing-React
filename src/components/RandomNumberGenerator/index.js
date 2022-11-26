// Write your code here

import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    const generatedNumber = Math.ceil(Math.random() * 100)
    this.setState({number: generatedNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-heading">Random Number</h1>
          <p className="card-paragraph">
            Generate a random number in the range from 0 to 100
          </p>
          <button
            type="button"
            className="card-button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <h1 className="card-counter">{number}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
