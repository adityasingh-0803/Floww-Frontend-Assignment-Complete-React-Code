// src/components/Tasks.js
import React, { useState, useEffect } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => {
        // JSONPlaceholder returns tasks with { title, completed }
        setTasks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  if (loading) return <div className="card"><h2>Tasks</h2><p>Loading tasks...</p></div>;

  return (
    <div className="card">
      <h2>Tasks</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {tasks.map((task, i) => (
          <li key={task.id} style={{ marginBottom: 10 }}>
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
