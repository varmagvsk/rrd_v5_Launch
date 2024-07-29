import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount(){
    console.log('Contact Unmounted')
  }

  render() {
    return <div>Contact</div>;
  }
}