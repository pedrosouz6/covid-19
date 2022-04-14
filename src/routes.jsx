import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import World from './pages/world';
import Continent from './pages/continent';
import Countries from './pages/countries';

import ProviderWorld from './context/world';
import ProviderAllDatas from './context/allDatas';
import ProviderContinent from './context/continent';
import ProviderCountries from './context/countries';
import ProviderInfoCountry from './context/infoCountry';

export default function Routess(){

    function Redirect() {
        return <Navigate to='/dashboard/world' />
    }

    return (
        <Router>
            <ProviderWorld>
                <ProviderAllDatas>
                    <ProviderContinent>
                        <ProviderInfoCountry>
                            <ProviderCountries>
                                <Routes>
                                    <Route path='/' element={ <Redirect></Redirect> } />
                                    <Route path='/dashboard/world' element={ <World /> } />
                                    <Route path='/dashboard/continent' element={ <Continent /> } />
                                    <Route path='/dashboard/countries' element={ <Countries /> } />
                                </Routes>
                            </ProviderCountries>
                        </ProviderInfoCountry>
                    </ProviderContinent>
                </ProviderAllDatas>
            </ProviderWorld>
        </Router>
    )
}