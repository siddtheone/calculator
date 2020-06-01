import styled from 'styled-components';

const Button = styled.button`
    font-family: inherit;
    font-size: inherit;
    border: 0;
    outline: none;
    transition: .5s;
    cursor: pointer;
    background-image: var(${({id}) => id === 'clear' ? '--buttonClearBG' : id === 'equals' ? '--buttonEqualBG' : '--buttonsBG'});
    color: var(--buttonsText);
    grid-column: span ${({id}) => ['clear', 'zero'].indexOf(id) > -1 ? '2' : '1'};
    grid-row: span ${({id}) => id === 'equals' ? '2' : '1'};

    &:active {
      transform: scale(.9)
    }

`;

export default Button;

