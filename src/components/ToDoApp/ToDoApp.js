import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import ToDoList from '../ToDoList/ToDoList';

const ToDoApp = () => {


  
  

  const {data, isLoading, refetch} = useQuery('items', () => fetch('http://localhost:5000/user').then(res => res.json()))


  if(isLoading){
    return <p className='text-center text-3xl font-bold '>Loading.............</p>
  }


  console.log(data);

 


  const handleUserSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const description = e.target.description.value;
    const user = {name, description}

    fetch('http://localhost:5000/user', {
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      toast.success(data?.message)
      refetch();
    })

  };




  return (
    <div className="bg-white flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold uppercase mb-8">Add Task</h1>
      <form
        onSubmit={handleUserSubmit}
        className="w-[400px] p-4 border border-rose-400 rounded mx-auto"
      >
        <input
          type="text"
          required
          placeholder="Type here"
          name="name"
          className="w-full mx-auto input mb-4"
        />
        <textarea
          className="textarea  textarea-bordered  w-full"
          placeholder="Bio"
          name="description"
        ></textarea>

        <input className="btn px-6 w-full" value="Add" type="submit" />
      </form>
      <ToDoList
      data={data}
      ></ToDoList>
    </div>
  );
};

export default ToDoApp;
