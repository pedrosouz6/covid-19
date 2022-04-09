import styled from 'styled-components';

import { Style } from '../default/styles';

const {  
    background_secondary,
    color,
    background_animation,
    transition
} = Style.default

export const Aside = styled.aside `
    width: 120px;
    height: 100vh;
    background: ${background_secondary};
    color: ${color};

    .header {
        width: 100%;
        text-align: center;
        margin: 2rem 0;

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
            background-color: ${background_secondary};
            
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