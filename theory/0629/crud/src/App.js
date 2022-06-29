import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Welcome } from './Welcome';
import { Nav } from './Nav';

function Control() {
  return <ul>
    <li><Link to="/create">Create</Link></li>
  </ul>
}

function Create() {
  return <article>
    <h1>Create</h1>
    <form>
      <p><input type="text" name="title" placeholder="title"></input></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="create"></input></p>
    </form>
  </article>
}

function App() {
  const [topics, setTopics] = useState([]);

  async function refresh() {
    const resp = await fetch('/topics');
    const data = await resp.json();
    setTopics(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/read/:id" element={<Read></Read>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
      </Routes>
      <Control></Control>
    </div>
  );
}

function Read() {
  const params = useParams();
  const id = Number(params.id);
  const [topic, setTopic] = useState({ title: null, body: null });

  async function refresh() {
    const resp = await fetch('/topics' + id);
    const data = await resp.json();
    setTopic(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  return <article>
    <h2>{topic.title}</h2>
    {topic.body}
  </article>
}

export default App;