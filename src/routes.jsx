import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/world';

export default function Routess(){
    // /dashboard/world
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Home /> } />
            </Routes>
        </Router>
    )
}