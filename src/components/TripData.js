import "./Trip.css";
import { Component } from "react";

class TripData extends Component {
  render() {
    return (
      <div className="t-card">
        <div className="t-image">
          <img alt="image" src={this.props.image} />
        </div>
        <h4>{this.props.heading}</h4>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default TripData;
