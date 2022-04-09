import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/world';

import ProviderWorld from './context/world';

export default function Routess(){
    // /dashboard/world
    return (
        <Router>
            <ProviderWorld>

                <Routes>
                    <Route path='/' element={ <Home /> } />
                </Routes>
            </ProviderWorld>
        </Router>
    )
}