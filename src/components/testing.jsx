import React, { Component } from 'react'

export default class Testing extends Component {

  constructor(props) {
    super(props);
    this.testingRef = React.createRef();
    this.value = 5;
  }

  testing = () => {
    console.log(this.value)
  }
  static sayHi() {
    console.log('hi')
  }

  render() {
    return (
      <div ref={this.testingRef} />
    )
  }
}
