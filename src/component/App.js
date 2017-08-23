import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import UserTable from '../container/UserTable'
import DataTable from '../component/DataTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/*<p className="App-intro">*/}
           {/*this is datatable ~~~~~~~~~~*/}
        {/*</p>*/}
          {/*<DataTable items={[*/}
              {/*{firstname:'1111',lastname:'2222'}*/}
              {/*,{firstname:'aaaa',lastname:'bbbb'}*/}
          {/*]}/>*/}
          <p className="App-intro">
              this is user table ~~~~~~~~~~
          </p>
          <UserTable users={[
              {firstname:'uuuu1111',lastname:'uuuuu2222'}
              ,{firstname:'uuuuaaaa',lastname:'uuuubbbb'}
          ]}></UserTable>

      </div>
    );
  }
}

export default App;
