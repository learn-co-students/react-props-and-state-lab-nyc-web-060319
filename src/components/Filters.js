import React from 'react'

class Filters extends React.Component {


  state = {value: 'all'};
  // filter = null;
  onChangeHandler = (event) => {
    const thisEvent = Object.assign({}, event);
    this.filter = thisEvent.target.value
    this.setState({value: thisEvent.target.value})
    this.props.onChangeType(thisEvent);
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.filters} onChange={this.onChangeHandler}>
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
