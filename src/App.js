import './App.css';
import { Routes, Route } from 'react-router-dom'
// routes
import Landing from './pages/landing/Landing'
import NoPage from './pages/NoPage'
import Home from './pages/home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
    </div>
  );
}

export default App;
