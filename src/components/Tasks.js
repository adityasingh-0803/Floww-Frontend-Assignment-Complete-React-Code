import React, { useState, useEffect } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, completed, pending

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => {
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

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const completedCount = tasks.filter(t => t.completed).length;

  if (loading) return <div className="card"><h2>Tasks</h2><p>Loading tasks...</p></div>;

  return (
    <div className="card">
      <h2>Tasks</h2>
      <p>
        <b>Total Tasks:</b> {tasks.length} |{' '}
        <b>Completed:</b> {completedCount} |{' '}
        <b>Pending:</b> {tasks.length - completedCount}
      </p>
      
      <div style={{ marginBottom: 10 }}>
        <button
          onClick={() => setFilter('all')}
          style={{ marginRight: 5, fontWeight: filter === 'all' ? 'bold' : 'normal' }}
        >
          All
        </button>
        <button
          onClick={() => setFilter('completed')}
          style={{ marginRight: 5, fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('pending')}
          style={{ fontWeight: filter === 'pending' ? 'bold' : 'normal' }}
        >
          Pending
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks to show.</p>
      ) : (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {filteredTasks.map((task, i) => (
            <li key={task.id} style={{ marginBottom: 10 }}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(tasks.findIndex(t => t.id === task.id))}
                  style={{ marginRight: 10 }}
                />
                {task.title}
              </label>
            </li>
          ))}
        </ul>
      )}

      {completedCount === tasks.length && tasks.length > 0 && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>🎉 All tasks completed!</p>
      )}
    </div>
  );
};

export default Tasks;
