import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Componets/Landing';
import Members from './Componets/Members';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing/>}></Route>
        <Route exact path='/members' element={<Members/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
