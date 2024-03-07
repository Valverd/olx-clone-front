import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default () => {
    return(
        <Routes>
            <Route Component={Home} path='/'/>
            <Route Component={About} path='/sobre'/>
        </Routes>
    )
}