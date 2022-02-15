import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import { Routes,Route,Navigate } from 'react-router-dom';

function App() {
  return (
   <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Navigate to='/welcome'/>} />
      <Route path='/welcome' element={<Welcome/>} />
    </Routes>
   </>
  );
}

export default App;
