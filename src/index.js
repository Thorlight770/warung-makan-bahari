import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import AppCoba from './PERCOBAAN/AppCoba';
// import Table from './menu/table/Table';
import AppTodo from './TODO/AppTodo';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './TODO/CounterStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    {/* <AppCoba/> */}
  <AppTodo/>
    {/* <App/> */}
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
