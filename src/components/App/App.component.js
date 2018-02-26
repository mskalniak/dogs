import React, { Component } from 'react';
import { Header } from '../Header/Header.container';
import { Search } from '../Search/Search.container';
import { Photos } from '../Photos/Photos.container';
import './App.styles.scss';


export class AppComponent extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <Photos />
      </div>
    );
  }
}
