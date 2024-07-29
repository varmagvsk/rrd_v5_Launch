import React from "react";
import { Button } from "antd";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ marginTop: 5 }}>
        <Button onClick={() => this.props.history.push("/")}>Go to Home</Button>

        <Button
          onClick={() => this.props.history.push("/contact")}
          style={{ marginLeft: 5, marginRight: 5 }}
          
        >
          Go to Contact
        </Button>
        <Button onClick={() => this.props.history.push("/about")}>
          Go to About
        </Button>
      </div>
    );
  }
}
