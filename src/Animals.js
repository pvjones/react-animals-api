
import React, { Component } from 'react';
import { getAnimals } from './animalService.js';
import Animal from './Animal';

class Animals extends Component {
  constructor() {
    super();
    this.state = {
      animals: []
    }
  }
  render() {
    const animals = this.state.animals.map((animal, i) => {
      return (
        <Animal key={i} animal={animal} />
        //this links to our 'view component' called 'Animal'
      )
    })

    return (
      <div>
        <h2>Animals</h2>
        {animals[0] ? animals : 'Loading...'}
      </div>
    )
  }
  componentDidMount() {
    getAnimals().then(animals => {
      this.setState({ animals: animals })
    })
  }
}
export default Animals;