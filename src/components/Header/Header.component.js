import React, { Component } from 'react';
import './Header.styles.scss';

export class HeaderComponent extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <span className="header__logo--colored">Dog</span>App
        </div>
      </div>
    );
  }
}
