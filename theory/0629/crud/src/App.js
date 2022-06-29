import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Routes, Route, useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Welcome } from './Welcome';
import { Nav } from './Nav';

function Read() {
  const params = useParams();
  const id = Number(params.id);
  const [topic, setTopic] = useState({ title: null, body: null });

  async function refresh() {
    const resp = await fetch('http://localhost:3300/topics/' + id);
    const data = await resp.json();
    setTopic(data);
  }

  useEffect(() => {
    refresh();
  }, [id]);

  return <article>
    <h2>{topic.title}</h2>
    {topic.body}
  </article>
}

function Control() {
  const params = useParams();
  const id = Number(params.id);
  let contextUI = null;
  if(id) {
    contextUI = <>
      <li><Link to={`/update/${id}`}>Update</Link></li>
    </>
  }

  return <ul>
    <li><Link to="/create">Create</Link></li>
    {contextUI}
  </ul>
}

function Create(props) {
  function submitHandler(evt) {
    evt.preventDefault();
    const title = evt.target.title.value;
    const body = evt.target.body.value;
    props.onCreate(title, body);
  }

  return <article>
    <h1>Create</h1>
    <form onSubmit={submitHandler}>
      <p><input type="text" name="title" placeholder="title"></input></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="create"></input></p>
    </form>
  </article>
}

function App() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  async function refresh() {
    const resp = await fetch('http://localhost:3300/topics');
    const data = await resp.json();
    setTopics(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function createHandler(title, body) {
    const resp = await fetch('http://localhost:3300/topics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });
    const data = await resp.json();
    refresh();
    navigate(`/read/${data.id}`); // redirection
  }

  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/read/:id" element={<Read></Read>}></Route>
        <Route path="/create" element={<Create onCreate={createHandler}></Create>}></Route>
      </Routes>
      <Control></Control>
    </div>
  );
}

export default App;