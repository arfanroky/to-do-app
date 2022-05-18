import React from 'react';

const ToDoList = ({ data }) => {
  return (
    <div className="w-full ">
      {data.map((item) => (
        <div
          className="flex justify-between items-center w-[400px] p-4 border rounded mx-auto my-4"
          key={item._id}
        >
          <h1>{item?.name}</h1>
          <p>{item?.description}</p>
          <button className="btn btn-xs ">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
