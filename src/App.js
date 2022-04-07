import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      thucdon: DISHES
    }
  }
  
  render(){
    return (
      <div>
        <Menu thucdon={this.state.thucdon}/>
      </div>
    );
  }
}

export default App;
