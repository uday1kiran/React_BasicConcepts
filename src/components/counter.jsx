import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <React.Fragment>
        <span
          styles={this.getBadgeClasses()}
          className="badge badge-primary m-2"
        >
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {/*  key attribute is required to uniquely identify it in virtual DOM by React */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //return this.state.count === 0? 'Zero':this.state.count;
    const { count } = this.state;
    //return count === 0 ? "Zero" : count;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
