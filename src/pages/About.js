import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    console.log('About Unmounted')
  }

  render() {
    return <div>About</div>;
  }
}