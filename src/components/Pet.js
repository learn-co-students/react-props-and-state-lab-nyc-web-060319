import React from 'react'

class Pet extends React.Component {
  // props
  //  type
  //  gender
  //  age
  //  weight
  //  name
  //  isAdopted
  //  onAdoptPet
  render() {
    // console.log(this.props);
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            (this.props.pet.isAdopted) ?
            <button className="ui disabled button" onClick={(event) => {this.props.onAdoptPet(event, this.props.pet)}}>Already adopted</button> :
            <button className="ui primary button" onClick={(event) => {this.props.onAdoptPet(event, this.props.pet)}}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
