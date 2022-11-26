import "./App.css";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/login'>login</Link> <br></br>
        <Link to='/signup'>Signup</Link> <br></br>
        <Link to='/dashboard'>Dashboard</Link>
     </nav>

    </div>
  );
}

export default App;
