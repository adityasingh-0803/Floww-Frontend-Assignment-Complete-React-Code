import React, { useEffect, useState } from 'react';
import tasksData from '../data/tasks.json';

const Stats = () => {
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const comp = tasksData.filter(t => t.completed).length;
    const pend = tasksData.length - comp;
    setCompleted(comp);
    setPending(pend);
  }, []);

  return (
    <div className="card">
      <h2>Statistics</h2>
      <p><b>Completed Tasks:</b> {completed}</p>
      <p><b>Pending Tasks:</b> {pending}</p>
    </div>
  );
};

export default Stats;
