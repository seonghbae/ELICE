import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Routes, Route, useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Welcome } from './Welcome';
import { Nav } from './Nav';
import { Create } from './Create';
import { Read } from './Read';
import { Update } from './Update';

function Control(){
  const params = useParams();
  const id = Number(params.id);
  let contextUI = null;
  if(id){
    contextUI = <>
      <li><Link to={`/update/${id}`}>Update</Link></li> 
    </>
  }

  return <ul>
    <li><Link to="/create">Create</Link></li>
    {contextUI}
  </ul>
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

  async function updateHandler(id, title, body) {
    const resp = await fetch('http://localhost:3300/topics/' + id, {
      method: 'PUT',
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
        <Route path="/update/:id" element={<Update onUpdate={updateHandler}></Update>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Control></Control>}></Route>
        <Route path="/read/:id" element={<Control></Control>}></Route>
      </Routes>
    </div>
  );
}

export default App;