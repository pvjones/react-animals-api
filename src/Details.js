import React, { Component } from 'react';
import { getAnimal } from './animalService';

class Details extends Component {

  render() {

    return (
      <div>
        <h1>{this.state.animal.name}</h1>
        <p>{this.state.animal.diet}</p>
        <p>{this.state.animal.status}</p>
      </div>
    )
  }

  componentDidMount() {
    getAnimal(this.props.params.name)
      .then(animal => {
        this.setState({ animal })
      })
  }
}
export default Details;