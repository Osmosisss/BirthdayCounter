import React, { Component } from 'react';
import BirthdayForm from './birthday_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Birthday Countdown</h1>
          <div className='header-skew'>
              <div className='header-subskew'>
                <BirthdayForm />
              </div>
          </div>
        </header>
      </div>
    );
  }
}
