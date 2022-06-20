import logo from './logo.svg';
import { useState, useEffect } from 'react';

function Header() {
  return <header><h1><a href="/">WEB</a></h1></header>
}

function Nav(props) {
  return <nav><ol>{props.data.map(e => {
    return <li key={e.id}><a href={`/read/${e.id}`}>{e.title}</a></li>
  })}</ol></nav>
}

function App() {
  const [topics, setTopics] = useState();
  const refreshTopics = async () => {
    const resp = await fetch('http://localhost:3333/topics');
    const result = await resp.json();
    setTopics(result);
  }

  useEffect(() => {
    refreshTopics();
  }, []);

  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
    </div>
  );
}

export default App;
