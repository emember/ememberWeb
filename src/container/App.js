import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import AppMenu from '../container/AppMenu'
import UserTable from '../container/UserTable'
import MemberTable from '../container/MemberTable'

const App =()=>(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

      <AppMenu className="App-Menu"></AppMenu>

      <div>
          {/*<p className="App-intro">*/}
              {/*----------------this is member table ~~~~~~~~~~*/}
          {/*</p>*/}
          {/*<MemberTable/>*/}
      </div>
      </div>
    )

export default App;
