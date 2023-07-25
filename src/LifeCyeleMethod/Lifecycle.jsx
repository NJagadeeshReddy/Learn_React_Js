import React, { Component } from "react";

export class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      name: "jsp",
    };
    console.log("lifeCycle component constructor");
  }
  static getDrivedStatesFormProps(state, props) {
    console.log("LifeCylce getDerivedStatesFormProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycle componentDidMount")
    return null
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prev,) {
    console.log("getSnapshotBeforeUpdate")
    return null
  }
  changeState = () => {
    this.setState(
      {
        name: "qsp"
      }
    )
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  render() {
    console.log("component rendered");
    return (
      <div>
        <h1 className="hint">Life Cycle Methods</h1>
        <button onClick={this.changeState}>change</button>
      </div>
    )
  }
}
export default Lifecycle;
