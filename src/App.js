import { useState } from 'react';
import './App.css';
import ToDoApp from './components/ToDoApp/ToDoApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import PrivateAuth from './components/Login/PrivateAuth';
import Home from './components/Home';

function App() {



  return (
    <div className=" bg-white">
      <ToastContainer></ToastContainer>
     <Home></Home>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateAuth>
              <ToDoApp></ToDoApp>
            </PrivateAuth>
          }
        ></Route>
        <Route
          path="/todoapp"
          element={
            <PrivateAuth>
              <ToDoApp></ToDoApp>
            </PrivateAuth>
          }
        >
        </Route>
          <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
