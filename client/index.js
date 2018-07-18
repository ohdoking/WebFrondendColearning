import React from 'react';

import ReactDOM from 'react-dom';

import './style/style.scss';

// you can use variable like this.
const name = "ohdoking2";

//this is jsx style
const element = (
  <div>
    <h1>Hello {name}!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

const App = () => {
  return element;
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);