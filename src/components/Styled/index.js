import styled from 'styled-components';

export const Calculator = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto repeat(6, 50px);
    max-width: 320px;
    margin: 100px auto 0 auto;
    grid-gap: 3px;
`;

export const Screen = styled.div`
    grid-column: 1 / -1;
    grid-row: span 2;
    background: var(--screenBG);
    color: var(--screen);
    text-align: right;
`;