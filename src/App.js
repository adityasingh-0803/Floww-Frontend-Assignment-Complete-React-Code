import React, { useState } from 'react';
import Profile from './components/Profile';
import Tasks from './components/Tasks';
import Stats from './components/Stats';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [view, setView] = useState('dashboard'); // 'dashboard', 'login', 'signup'

  return (
    <div className="container">
      <nav style={{ marginBottom: 20, textAlign: 'center' }}>
        <button onClick={() => setView('dashboard')} style={{ marginRight: 10 }}>Dashboard</button>
        <button onClick={() => setView('login')} style={{ marginRight: 10 }}>Login</button>
        <button onClick={() => setView('signup')}>Sign Up</button>
      </nav>

      {view === 'dashboard' && (
        <>
          <h1>Floww Dashboard</h1>
          <div className="dashboard">
            <Profile />
            <Tasks />
            <Stats />
          </div>
        </>
      )}

      {view === 'login' && <Login />}
      {view === 'signup' && <Signup />}
    </div>
  );
}

export default App;
