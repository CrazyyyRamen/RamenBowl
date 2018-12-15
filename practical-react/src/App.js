import React, { Component } from 'react';
import Header from './Header';
import MainBody from './MainBody';


export default class App extends Component {
  constructor(){
    super();
    this.state={
        title:"I like noodle",
    };
  }

  changeTitle(title){
    this.setState({title})
  }

  alertMsg(){
    const newTitle = this.state.title;
    alert(newTitle);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <MainBody></MainBody>
      </div>
    );
  }
}
