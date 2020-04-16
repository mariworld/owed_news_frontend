import { createGlobalStyle } from 'styled-components';
import Chomsky from './chomsky.regular.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Chomsky';
        src: local('Chomsky'), local('Chomsky'),
        url(${Chomsky}) format('Chomsky'),
        
        font-weight: 300;
        font-style: normal;
    }
`;