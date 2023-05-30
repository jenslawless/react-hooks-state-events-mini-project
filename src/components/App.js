import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")


  function handleDelete(taskToDelete) {
    setTasks(tasks.filter((task) => task.text !== taskToDelete))
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  const visibleTasks = tasks.filter((task) => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={visibleTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
