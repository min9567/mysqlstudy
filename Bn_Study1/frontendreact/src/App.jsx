import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/users', {
        username: name,
        email: email
      })
      console.log(res.data);

      setName('');
      setEmail('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}

export default App;
