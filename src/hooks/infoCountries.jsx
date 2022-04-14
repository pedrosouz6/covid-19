import { useContext } from 'react';
import { ContextCountry } from '../context/infoCountry';

export default function useCountries() {
    const { datasInfoCountry } = useContext(ContextCountry);
    return  { datasInfoCountry };
}