import styled, { css } from 'styled-components';

const Button = styled.button``;

const BarText = styled.hr`
  width: 117px;
  height: 3px;
  height: 3px !important;
  opacity: 1;

  ${(props) =>
    props.gold &&
    css`
      background: #f9c56a;
    `};
`;

export { Button, BarText };
