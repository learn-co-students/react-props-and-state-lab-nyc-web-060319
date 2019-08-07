import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

function URL(type) {
  // console.log(type);
  if (type === "all") {
    return '/api/pets'
  }
  switch (type) {
    case ('cat'):
      return '/api/pets?type=cat';
    case ('dog'):
      return '/api/pets?type=dog';
    case ('micropig'):
      return '/api/pets?type=micropig';
    default:
      console.error('invalid filter type');
  }
  console.warn("Never reach this place?");
  debugger;
}


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  queryAndRenderPets = (type) => {
    const apiURL = URL(type);
    fetch(apiURL)
      .then(data => data.json())
      .then(parsed => this.setState({pets: parsed}));
  }

  onChangeType = (event) => {
    // console.log("onChangeType", event);
    this.setState({filters: Object.assign({}, this.state.filters, {type: event.target.value})})

  }
  onFindPetsClick = () => {
    this.queryAndRenderPets(this.state.filters.type);
  }

  onAdoptPet = (pet) => {
    this.state.pets.forEach(reqPet => {
      if(reqPet.id === pet){
        reqPet.isAdopted = !reqPet.isAdopted;
      }
    })
    this.setState({pets: this.state.pets});
  }


  componentDidMount() {
    this.queryAndRenderPets('all');
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
