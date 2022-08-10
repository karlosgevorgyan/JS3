import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './Components/Login';
import Password from './Components/Password';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/password' element={<Password/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
