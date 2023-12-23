import React, { PureComponent } from 'react';

export default class PureCounterComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: true,
    };
  }

  changeToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  increment = () => {
    if (this.state.toggle) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        count: this.state.count,
      });
    }
  };

  render() {
    console.warn('This is a pure Component');
    return (
      <div
        style={{
          border: '1px solid white',
          padding: '40px',
        }}
      >
        <h1>Pure Counter</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={this.changeToggle}
          style={{
            backgroundColor: `${this.state.toggle ? 'green' : 'red'}`,
          }}
        >
          Toggle
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
