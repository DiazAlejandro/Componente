import './App.css';
import React from 'react';

import Title from './components/Title';
import Table from './components/Table';
import Card  from './components/Card';
export class App extends React.Component {
  render() {
    return <div>
      
      <Title />
      <Table />
      <Card />
    </div>;
  }
}

export default App;
