import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Starter from './pages/Starter/Starter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/starter' element={<Starter/>} />
      </Routes>
    </div>
  );
}

export default App;
