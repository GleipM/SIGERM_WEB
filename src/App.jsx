import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/screens/Login'
import Home from './components/screens/Home'
import Meseros from './components/screens/Meseros'
import Mesas from './components/screens/Mesas'
import Categorias from './components/screens/Categorias'
import Menu from './components/screens/Menu'
import Reseñas from './components/screens/Reseñas'


function App() {


    return (
        <Router>
            <Routes>
                <Route path='/' element= {<Login/>}></Route>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Meseros" element={<Meseros />}></Route>
                <Route path="/Mesas" element={<Mesas />}></Route>
                <Route path="/Categorias" element={<Categorias />}></Route>
                <Route path="/Menu" element={<Menu />}></Route>
                <Route path="/Reseñas" element={<Reseñas />}></Route>
            </Routes>
        </Router>
    )
}

export default App
