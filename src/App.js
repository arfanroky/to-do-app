
import { useState } from 'react';
import './App.css';
import ToDoApp from './components/ToDoApp/ToDoApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  
  const [item , setItem] = useState('');
  const [todos , setTodos] = useState([]);


  return (
    <div className=" bg-white">
      <ToastContainer></ToastContainer>
      <ToDoApp
      item={item}
      setItem={setItem}
      todos={todos}
      setTodos={setTodos}
      ></ToDoApp>
    </div>
  );
}

export default App;
