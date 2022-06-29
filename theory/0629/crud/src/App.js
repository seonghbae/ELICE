import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Welcome } from './Welcome';

function Nav(props) {
  return <nav>
    <ol>
      {props.data.map((e) => <li key={e.id}><Link to={`/read/${e.id}`}>{e.title}</Link></li>)}
    </ol>
  </nav>
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
      </Routes>
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