import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Calendar } from './Calendar/Calendar';
import { TabLayout } from './Layouts/TabLayout';

function App() {
  return (
    <div className="App">
      <TabLayout />
    </div>
  );
}

export default App;
