import React from "react";
import './App.css';
import './assets/css/bootstrap.css';

import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Content from "./components/Content";

export default function App() {
  return (
    <div className='c-home'>
      <Navbar />
      <Title />
      <Content />
    </div>
  );
}