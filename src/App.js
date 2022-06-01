import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ColumnLayout from './layout/ColumnLayout';
// import AppRouters from './routes/AppRouters';

const App = () => {
  return (
    <BrowserRouter>
      <ColumnLayout/>
    </BrowserRouter>
  )
}

export default App;
