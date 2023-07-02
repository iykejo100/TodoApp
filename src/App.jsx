import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]);
    setTodo('');
  };

  const deleteTodo =(deleteValue) =>{
   const restTodolist = [
    ...todoList.filter((val) => {
      return val.todoName !== deleteValue;

    }),
  
   ];
   setTodoList(restTodolist);

  };


  return (
    <div className="bg-gray-200 w-full h-screen flex items-center">
      <div className="w-[500px] mx-auto bg-white p-3 text-center">
        <h1 className="text-5xl font-bold mb-5">Iyke Todo List</h1>
        <form onSubmit={handleForm}>
          <input
            className="border-2 border-black rounded-lg p-3 placeholder:text-gray-300 text-black mb-5"
            type="text"
            placeholder="Add Task"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <br />
          <button
            type="submit"
            className="bg-blue-800 w-32 text-white text-bold text-1xl py-3 px8 rounded-lg mb-5"
          >
            Add Task
          </button>
        </form>
        <div className="todo-show-area">
          <ul>
            {todoList.map((item, index) => (
              <li
                key={index}
                className="bg-gray-500 text-white py-5 mb-5 rounded-lg text-xl px-7 flex justify-between"
              >
                {item.todoName}
                <span onClick={() => deleteTodo(item.todoName)} className="text-red-700 text-3xl cursor-pointer">x</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
