import React from 'react'

class Filters extends React.Component {

  filter = null;
  onChangeHandler = (event) => {
    // event.persist();
    const thisEvent = Object.assign({}, event);
    // console.log(thisEvent);
    this.filter = thisEvent.currentTarget.value
    
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.onChangeHandler}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={() => this.props.onFindPetsClick(this.filter)}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
