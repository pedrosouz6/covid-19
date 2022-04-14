import { useContext } from 'react';
import { ContextCountries } from '../context/countries';

export default function useCountries() {
    const { datasCountries } = useContext(ContextCountries);
    return  { datasCountries };
}