import React, { Component } from 'react';
import logo from './logo.svg';
import './Hello.css';

const Hello = (props) =>{
  return (
      <div className='f1 tc'>
      <h1>Testing REACT</h1>
      <p>{props.greeting}</p>
      <p>{props.name}</p>
      </div>
  );
}

export default Hello;
