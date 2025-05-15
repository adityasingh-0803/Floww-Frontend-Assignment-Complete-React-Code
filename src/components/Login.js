import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (username === 'user' && password === 'pass') {
      alert('Login successful');
      setError('');
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: 'auto' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" style={{ width: '100%', padding: 10 }}>
        Login
      </button>
      <p style={{ marginTop: 10, textAlign: 'right', fontSize: 12 }}>
        <a href="#">Forgot Password?</a>
      </p>
    </form>
  );
};

export default Login;
