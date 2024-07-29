import React from "react";
import Nav from "../components/Nav";
import Login from "./Login";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

export default class Launch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currScreen: "/",
      isLoggedIn: true,
    };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname != this.props.location.pathname){
        this.setState({currScreen:this.props.location.pathname})
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn && (
          <div>
            <Nav {...this.props} />
            {this.state.currScreen == "/" && <Home {...this.props} />}
            {this.state.currScreen == "/about" && <About {...this.props} />}
            {this.state.currScreen == "/contact" && <Contact {...this.props} />}
          </div>
        )}
      </div>
    );
  }
}
