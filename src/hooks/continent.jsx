import { useContext } from 'react';
import { ContextContinent } from '../context/continent';

export default function useContinent() {
    const { datasContinent, continentCountries, countries, setChooseContinent } = useContext(ContextContinent);
    return  { datasContinent, continentCountries, countries, setChooseContinent };
}