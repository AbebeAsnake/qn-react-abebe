import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Forum from "./components/Forum.react";
import { EventEmitter } from "./EvenEmitter";
import {ForumDispatcher}from "./js/dispatcher/ForumDispatcher"

ReactDOM.render(
  <React.StrictMode>
    <Forum/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const myEmitter = new EventEmitter();
myEmitter.on('STARTED_THE_APP', function(){
  console.log('started the app');
});

myEmitter.on('STARTED_THE_APP', function(){
  console.log('started the app #2');
});

myEmitter.emit('STARTED_THE_APP');

ForumDispatcher.register(function(action){
console.log('received action');
console.log(action);
})
