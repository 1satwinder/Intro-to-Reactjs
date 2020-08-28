import React, { Component } from "react";
import UpdatedComponent from "./UpdatedComponent";

class HoverCounter extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={increamentCount}>Hover Increament {count}. And name {this.props.name}</h1>
      </div>
    );
  }
}
export default UpdatedComponent(HoverCounter);
