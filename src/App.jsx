import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/screens/Sidebar';
import Login from './components/screens/Login';
import Home from './components/screens/Home';
import Meseros from './components/screens/Meseros';
import Mesas from './components/screens/Mesas';

function App() {
  return (
    <Router>
      <div className="d-flex">

        {/* Main Content */}
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/meseros" element={<Meseros />} />
            <Route path="/mesas" element={<Mesas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;