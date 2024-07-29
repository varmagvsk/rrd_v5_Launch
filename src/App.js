import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Launch from "./pages/Launch";
class App extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path = '/' component={Launch} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;