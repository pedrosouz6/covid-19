import { useContext } from 'react';
import { ContextContinent } from '../context/continent';

export default function useContinent() {
    const { datasContinent, continentCountries } = useContext(ContextContinent);
    return  { datasContinent, continentCountries };
}