import React, { Component } from "react";
import UpdatedComponent from "./UpdatedComponent";

class ClickCounter extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return (
      <div>
        <button onClick={increamentCount}>The Count is {count}. And name {this.props.name}</button>
      </div>
    );
  }
}
export default UpdatedComponent(ClickCounter);
