import './App.css';
import Counter from './components/Counter/Counter';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="App">
      {isAuth ? <p>You're logged in</p> : <Login />}
      <Counter />
    </div>
  );
}

export default App;
