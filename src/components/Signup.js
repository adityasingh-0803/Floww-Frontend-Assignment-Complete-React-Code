import React, { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!form.agree) {
      setError('You must agree to the terms and conditions');
      return;
    }
    alert('Sign Up Successful!');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: 'auto' }}>
      <h2>Sign Up</h2>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <label style={{ fontSize: 14 }}>
        <input
          name="agree"
          type="checkbox"
          checked={form.agree}
          onChange={handleChange}
          style={{ marginRight: 5 }}
        />
        I agree to the Terms and Conditions
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" style={{ width: '100%', padding: 10, marginTop: 10 }}>
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
