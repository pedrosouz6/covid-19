import { useContext } from 'react';
import { ContextWorld } from '../context/world';

export default function useWorld() {
    const { dataDeaths, dataCases } = useContext(ContextWorld);
    
    return { dataDeaths, dataCases };
}