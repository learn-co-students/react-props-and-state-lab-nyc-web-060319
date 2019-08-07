import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  // props:
  //  onAdoptPet
  //  pets

  renderPetsArray = () => {

  }
  render() {
    const petArray = this.props.pets;
    // console.log(this.props);
    return (<div className="ui cards">
    {(petArray.length > 0) ? petArray.map(pet => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} key={pet.id}/>) : null}

    </div>)
  }
}

export default PetBrowser
