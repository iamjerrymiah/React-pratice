import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import ProductBuilder from './Container/ProductBuilder/ProductBuilder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ProductBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
