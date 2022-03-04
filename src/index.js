import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import HelloComponent from './Component/HelloComponent';

// const HelloComponent = () => {
//   return <p>StateFullComponent</p>
// }

// class StateFullComponent extends React.Component{
//   render(){
//     return<p>StateFullComponent</p>
//   }
// }
// ReactDOM.render(<HelloComponent/>, document.getElementById('root'));
ReactDOM.render( 
  <React.StrictMode>
    <HelloComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
// function HelloComponent() {
//   return HelloComponent



// const Hello = () =>{
//   return <p>hello</p>
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// }