import { Component } from "react";
class Taskone extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "Dhyana",
    };
  }
  inc = () => {
    this.setState({
      count: this.state.count + 1,
      name: "Dhyana 1",
    });
  };

  dec = () => {
    const counter = this.state.count;
    this.setState({
      count: counter > 0 ? counter - 1 : counter,
      name: "Dhyana 2",
    });
  };
  render() {
    return (
      <>
        <div className="col-lg-4 mx-auto my-5 p-5 shadow text-center">
        <h1 className="text-dark"> With Class:</h1>
          <h1>{this.state.count}</h1>
          <h2>{this.state.name}</h2>
          <button onClick={this.inc} className="btn btn-outline-warning mx-4 mt-4  ">+</button>
          <button onClick={this.dec} className="btn btn-outline-danger mx-4 mt-4">-</button>
        </div>
      </>
    );
  }
}

export default Taskone;