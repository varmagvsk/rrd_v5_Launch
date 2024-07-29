import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    console.log('Home Unmounted')
  }

  render() {
    return <div>Home</div>;
  }
}
