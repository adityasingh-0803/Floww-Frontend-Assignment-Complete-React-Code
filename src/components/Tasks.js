import React, { useState, useEffect } from 'react';
import tasksData from '../data/tasks.json';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div className="card">
      <h2>Tasks</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {tasks.map((task, i) => (
          <li key={i} style={{ marginBottom: 10 }}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(i)}
                style={{ marginRight: 10 }}
              />
              {task.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
