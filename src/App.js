import './App.css';
import { Routes, Route } from 'react-router-dom'
// routes
import Landing from './pages/landing/Landing'
import NoPage from './pages/NoPage'
import Monster from './pages/monsters/Monster';
import Index from './pages/home/Index';
import MonsterInfo from './pages/monsters/MonsterInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/wiki' element={<Landing />}/>
        <Route path='/home' element={<Index />}/>
        <Route path='/monsters' element={<Monster />}/>
        <Route path='/monsterInfo' element={<MonsterInfo />}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
    </div>
  );
}

export default App;
