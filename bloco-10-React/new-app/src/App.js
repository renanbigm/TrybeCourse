import './App.css';
import Header from './Header';
import React from 'react';
import Content from './Content';

class App extends React.Component{
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
