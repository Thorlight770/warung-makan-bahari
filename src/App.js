import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ColumnLayout from './layout/ColumnLayout';
// import AppRouters from './routes/AppRouters';
import {Login} from './auth/Login';
import RequireAuth from './auth/RequireAuth';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
         <Route index element={<Login/>}/>
         <Route
         path="/protected/*"
          element={
            <RequireAuth
            redirectTo={"/"}> */}
            <ColumnLayout/>
            {/* </RequireAuth>
          }
         />
       </Routes> */}
    </BrowserRouter>
  )
}

export default App;
