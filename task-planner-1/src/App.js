import { useState } from "react";
import { TaskItem } from "./TaskItem";
function App() {
  const [tasks, setTasks] = useState([
    {
      isCompleted: false,
      name: "Wake up.",
    },
    {
      isCompleted: false,
      name: "Take a shower.",
    },
    {
      isCompleted: false,
      name: "Make the bed.",
    },
    {
      isCompleted: false,
      name: "Eat some breakfast.",
    },
    {
      isCompleted: false,
      name: "Go to school.",
    },
    {
      isCompleted: false,
      name: "Go to Math class.",
    },    
    {
      isCompleted: false,
      name: "Play Soccer.",
    },
    {
      isCompleted: false,
      name: "Go Home.",
    },
    {
      isCompleted: false,
      name: "Do Math homework.",
    },
    {
      isCompleted: false,
      name: "Have some dinner.",
    },
    {
      isCompleted: false,
      name: "Go to sleep.",
    }
  ])
  const [textValue, setTextValue] = useState("");
  const handleTaskChange = (index) => () => {
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    setTasks(arr);
  };
  const newTask = (name) => {
    const newTask = {
      isCompleted: false,
      name: name,
    };
    setTasks([...tasks, newTask]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(textValue);
    newTask(textValue);
  };
  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextValue(value);
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <br></br>
        Daily routine<br></br>
        <br></br>
        <input 
          value={textValue}
          onChange={handleTextChange}
          type="text"
          placeholder="Type new activity"
        />
        <button>Create new Activity</button>        
      </form>
      <ul>
        {tasks.map((task,index) => {
          return (
            <TaskItem
              isChecked={task.isCompleted}
              taskName={task.name}
              onTaskChange={handleTaskChange(index)}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default App;
