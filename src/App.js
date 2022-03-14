import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';
const sty = { color: 'white', textAlign: 'center', fontSize: '.9em', paddingTop: '5px' };
const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022 &nbsp;
          <Link to="/">
            CryptoKart
          </Link> <br />
        </Typography.Title>
        <Space>
          <a href='https://www.linkedin.com/in/ayush-514875198/' target={'blank'}>Linked-In</a>&nbsp;&nbsp;
          <a href='https://github.com/ayush-shresth/' target={'blank2'}>Github</a>
        </Space>

        <div style={sty}> ayushshresth97@gmail.com   +91766780742 </div>
      </div>
    </div>
  </div>
);

export default App;
