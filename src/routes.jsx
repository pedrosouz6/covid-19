import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/world';

import ProviderWorld from './context/world';
import ProviderAllDatas from './context/allDatas';

export default function Routess(){
    // /dashboard/world
    return (
        <Router>
            <ProviderWorld>
                <ProviderAllDatas>
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                    </Routes>
                </ProviderAllDatas>
            </ProviderWorld>
        </Router>
    )
}