  
import React from 'react';
import './App.css';
import Routes from './routes';
import { Layout } from 'antd';
import AppMenu from './componentes/menu';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.png';
import * as ReactBootStrap from "react-bootstrap";


function App() {
  const { Header, Content, Footer } = Layout;
  return (
  <Router>
      <Layout className="layout">
        <Header>
          <AppMenu/>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Routes />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Adriane Müller 2020</Footer>
      </Layout>
    </Router>
  );
}

export default App;