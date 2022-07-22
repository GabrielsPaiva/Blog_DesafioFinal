import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle/>
        <Header/>

        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
        </Routes>
      </Router>
    );
  }
}