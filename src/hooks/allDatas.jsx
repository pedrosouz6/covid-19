import { useContext } from 'react';
import { ContextAllDatas } from '../context/allDatas';

export default function useAllDatas() {
    const { allDatas } = useContext(ContextAllDatas);
    return { allDatas };
}