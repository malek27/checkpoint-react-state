import React, { Component } from "react";
import Person from "./component/person";
import Photo from "./component/Photo.jpg";
import Child from "./component/lifeCycle";
import "./App.css";
class App extends Component {
  constructor(props) {
    console.log("App constructor");
    super(props);
    this.state = {
      count: 0,
      fullName: "Malek Marzouki",
      bio: "a 27 year-old web developer",
      profession: "developer",
      toggel: false,
    };
  }
  componentDidMount() {
    console.log("App mounted");
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    if (this.state.toggel === nextState.toggel) {
      console.log("it is not updated");
      return false;
    }
    console.log("it is updated");
    return true;
  }
  componentDidUpdate() {
    console.log("App componentDidUpdate called");
  }
  toggel = () => {
    this.setState({ toggel: !this.state.toggel });
  };
  render() {
    return (
      <div>
        {this.state.toggel ? (
          <div>
            <Person
              fullName={this.state.fullName}
              bio={this.state.bio}
              profession={this.state.profession}
            />
            <img src={Photo} alt="me" />
          </div>
        ) : null}

        <button onClick={this.toggel}>click</button>
        <hr />
        <Child toggel={this.state.toggel} counter={this.state.count} />
      </div>
    );
  }
}
export default App;
