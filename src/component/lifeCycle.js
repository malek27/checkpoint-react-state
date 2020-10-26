import React, { Component } from "react";
class Child extends Component {
  constructor(props) {
    console.log("Child constructor");
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("Child mounted");
  }
  componentDidUpdate() {
    console.log("Child componentDidUpdate called");
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }
  render() {
    return (
      <div>
        <h2>
          {this.props.toggel}life cycle component {this.props.counter}
        </h2>
      </div>
    );
  }
}
export default Child;
