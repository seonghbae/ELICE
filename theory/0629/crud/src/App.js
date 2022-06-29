import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Welcome } from './Welcome';

function Nav() {
  return <nav>
    <ol>
      <li><Link to="/read/1">html</Link></li>
    </ol>
  </nav>
}

function App() {
  const [topics, setTopics] = useState([]);

  async function refresh() {
    const resp = await fetch('http://localhost:3300/topics');
    const data = await resp.json();
    setTopics(data);
    console.log(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/read/1" element={<Read></Read>}></Route>
      </Routes>
    </div>
  );
}

function Read() {
  return <article>
    <h2>Read</h2>
    Hello, Read
  </article>
}

export default App;