import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import { Themes } from '../default/styles';

const { 
    background,
    color
} = 'lightf' == 'light' ? Themes.themeLight : Themes.themeDark;

export default createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: roboto;
    }

    body {
        background: ${background};
        color: ${color}
    }
`