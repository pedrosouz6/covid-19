import styled from 'styled-components';

import { Style } from '../default/styles';

const {  
    background,
    color,
    background_animation,
    transition
} = Style.default

export const Aside = styled.aside `
    width: 120px;
    height: 100vh;
    background: ${background};
    color: ${color};

    .header {
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        margin-bottom: 1rem;

        h1 {
            font-size: 10pt;
        }

    }
    
    nav ul {
        list-style: none;
        width: 100%;
        
        display: flex;
        align-items: center;
        /* justify-content: center; */
        flex-direction: column;

        li {
            width: 100%;
            background-color: ${background};
            
            padding: 15px 0;
            
            cursor: pointer;
            text-align: center;
            transition: ${transition}; 

            &:hover {
                background: ${background_animation};
            }
        }

    }
`