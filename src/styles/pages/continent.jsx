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
        flex-wrap: wrap;
        display: flex;
        gap: 2rem;

        .left, 
        .right {
            flex: 1 1 300px;
        }

        .grafic--map {
            width: 100%;
            display: flex;
            justify-content: center;
        }
       
        .numbers--covid {
            width: 100%;
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;

            .graphics {
                flex: 1;
                display: flex;
                flex-direction: column;
            }

            .cards--covid {
                flex: 1 1 300px;
                
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 1rem;
            }

            .cards {
                flex: 1 1 100px;
                max-width: 155px;
                height: 150px;
                
            }

            .header--card span {
                display: block;

                height: 35px;
                line-height: 35px;

                text-align: center;
                font-size: 10pt;
            }

            .content-card {
                height: calc(100% - 40px);
                display: flex;
                justify-content: center;
                align-items: center;

                p {
                    font-size: 18pt;
                }
            }
        }
    } 
`