import styled from 'styled-components';

import { Style } from '../default/styles';

const {
    background_primary,
    background_secondary,
    transition
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
        gap: 2.5rem;

        .names--countries {
            width: 100%;
            height: 35px;
            
            background: ${background_secondary};
            color: #333;

            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 0 10px;
            margin-bottom: 1rem; 
            border-radius: 5px;
            cursor: pointer;

            transition: ${transition};
            
            &:hover {
                color: black;
            }
        }


        .search--country {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid white;

            h4 {
                font-weight: 500;
            }

            select {
                width: 150px;
                height: 32px;
                outline: none;
                border: 1px solid black;
                border-radius: 2px;

                option {
                    display: block;
                    padding: 1rem;
                }
            }
        }

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

        .continent-country {
            background: ${background_secondary};
            padding: 10px;
            min-height: auto;
            max-height: 460px;
            overflow-x: hidden;
            border-radius: 5px;


            p {
                margin-bottom: 4px;
            }
        }
    } 
`