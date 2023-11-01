import './App.css';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>   
        <Route exact path='/home' element={<Home/>}/>   
      </Routes>
    </Router>
 </div>
  );
}

export default App;
