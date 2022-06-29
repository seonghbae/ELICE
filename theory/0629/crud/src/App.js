import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Link } from 'react-router-dom';

function Nav() {
  return <nav>
    <ol>
      <li><Link to="/read/1">html</Link></li>
    </ol>
  </nav>
}

function Welcome() {
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
