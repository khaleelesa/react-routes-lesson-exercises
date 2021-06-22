import React, { Component } from "react";
import "../styles/fentity.css";

class Fentity extends Component {
  render() {
    let fentitiesCategory = this.props.match.params.fentities;
    let fentitiesName = this.props.match.params.name;
    const fentity = this.props.state[fentitiesCategory].find(
      (fentity) => fentity.name === fentitiesName
    );
    return (
      <div id="creature-container">
        <h1>{fentity.name}</h1>
        <img src={fentity.imgUrl} alt="" />
        <div className="title">Power:</div>
        <div className="power text"> {fentity.power}</div>
        <div className="other text">{fentity.other}</div>
      </div>
    );
  }
}

export default Fentity;
