import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200",
  };

  styles = {
    fontSize: "10px",
    fontWeigh: "bold",
  };

  render() {
    //return <h1>Hello World</h1>//for single element.
    //return <div><h1>Hello World</h1><button>Increment</button></div>;//keep in div if multiple elements
    return (
      <React.Fragment>
        <h1 style={{ fontSize: 30 }}>Hello World</h1>
        <img src={this.state.imageUrl} />
        <span>{this.state.count}</span> {/*--Any javascript expressions */}
        <span styles={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        {/*converts to class attribute in html*/}
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    ); //keeping div is creating div inside the main div root, so using this
  }

  formatCount() {
    //return this.state.count === 0? 'Zero':this.state.count;
    const { count } = this.state;
    //return count === 0 ? "Zero" : count;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
