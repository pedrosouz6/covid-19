import { createGlobalStyle } from 'styled-components';
import { Themes } from '../default/styles';

const { 
    background
} = Themes.themeDark;

export default createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: roboto;
    }
`