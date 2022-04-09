import styled from 'styled-components';

import { Style } from '../default/styles';

const {
    background_primary
} = Style.default;

export const Main = styled.main `
    width: 100%;
    height: 100vh;
    display: flex;
    
    section {
        width: 100%;
        background: ${background_primary};
    }

    .container--world {
        width: 100%;
        height: 100vh;
        padding: 2rem 0;

        .name--page h4 {
            margin-bottom: 1rem;
            font-weight: 500;
        }
    } 
`