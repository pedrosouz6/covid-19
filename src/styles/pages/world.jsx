import styled from 'styled-components';

import { Style } from '../default/styles';

const {
    background_primary
} = Style.default;

export const Main = styled.main `
    width: 100%;
    display: flex;
    
    section {
        width: 100%;
        background: ${background_primary};
    }

    .container--world {
        width: 100%;
        min-height: 100vh;
        max-height: auto;
        padding: 2rem 0;

        .name--page h4 {
            margin-bottom: 1rem;
            font-weight: 500;
        }

        article {
            width: 100%;

            .graphics {
                width: 100%;
                background: red;
                display: flex;
                flex-direction: column;
            }

            .graphic {
                flex: 1 1 100px;
            }
        }

    } 
`