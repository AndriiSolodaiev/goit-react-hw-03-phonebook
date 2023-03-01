import styled from 'styled-components';

export const Label = styled.label`
  text-align: center;
  border-radius: 8px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  width: fit-content;
  padding: 5px 0;
`;

export const Input = styled.input`
  padding: 10px 20px;
  width: 200px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: border-color 250ms ease;

  :focus {
    outline: none;
    border-color: blue;
  }
`;
