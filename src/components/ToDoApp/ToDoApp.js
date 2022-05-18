import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import ToDoList from '../ToDoList/ToDoList';

const ToDoApp = () => {


  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  

  // const {data, isLoading, refetch} = useQuery('items', () => )

 useEffect(() => {
  fetch('https://fast-woodland-87197.herokuapp.com/user')
  .then(res => res.json())
  .then(data => {
  setItems(data);
  })
 }, [items])


  // if(isLoading){
  //   return <p className='text-center text-3xl font-bold '>Loading.............</p>
  // }

  const handleUserSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const description = e.target.description.value;
    const user = {name, description}

    fetch('https://fast-woodland-87197.herokuapp.com/user', {
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
      // refetch();
    })

  };

  const handleDelete = (id) => {
    const confirmation = window.confirm('Are Your Sure You Want To Delete ?')
    if (confirmation) {
        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                const itemDelete = items?.filter(p => p._id !== id);
                setItems(itemDelete)
                toast.success('Delete Successfully',)
            }
        })
    }
}




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
      handleDelete={handleDelete}
      items={items}
      // data={data}
      ></ToDoList>
    </div>
  );
};

export default ToDoApp;
