import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import World from './pages/world';
import Continent from './pages/continent';

import ProviderWorld from './context/world';
import ProviderAllDatas from './context/allDatas';
import ProviderContinent from './context/continent';

export default function Routess(){

    function Redirect() {
        return <Navigate to='/dashboard/world' />
    }

    return (
        <Router>
            <ProviderWorld>
                <ProviderAllDatas>
                    <ProviderContinent>
                        <Routes>
                            <Route path='/' element={ <Redirect></Redirect> } />
                            <Route path='/dashboard/world' element={ <World /> } />
                            <Route path='/dashboard/continent' element={ <Continent /> } />
                        </Routes>
                    </ProviderContinent>
                </ProviderAllDatas>
            </ProviderWorld>
        </Router>
    )
}