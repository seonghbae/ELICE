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

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
    </div>
  );
}

export default App;
