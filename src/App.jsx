import React, { useState } from "react";

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAdd(event) {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      task: task
    };

    setTasks([...tasks, newTask]); 
    setTask('');
  }

  function handleDelete(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="bg-black min-h-screen p-4"> 
      <form className="w-1/3 mx-auto mt-5 bg-gray-800 p-4 rounded-md">
        <input 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          className="border bg-transparent border-purple-500 focus:outline-none w-96 text-gray-400 p-2" 
          type="text" 
          placeholder="Add a new task"
        />
        <button 
          onClick={handleAdd} 
          className="bg-violet-400 ml-2.5 p-3 rounded-md text-white"
        >
          +
        </button>
      </form>

      <div className="flex flex-col items-center mt-5">
        {tasks.map((task) => (
          <div key={task.id} className="task-item text-white text-center flex justify-between items-center w-1/3 bg-gray-700 p-2 rounded-md mb-2">
            <span>{task.task}</span>
            <button onClick={() => handleDelete(task.id)} className="bg-red-500 p-3 rounded-md text-white">X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
