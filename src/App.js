import './App.css';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <Home/>
    {/* <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </Router> */}
 </div>
  );
}

export default App;
