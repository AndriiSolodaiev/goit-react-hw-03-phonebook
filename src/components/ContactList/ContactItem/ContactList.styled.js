import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  margin-bottom: 10px;
  width: 400px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: transform 250ms ease;

  :focus,
  :hover {
    transform: scale(1.05);
  }
`;

export const DeleteButton = styled.button`
  background-color: orangered;
  border-radius: 8px;
  color: white;
  opacity: 0.5;
  transition: opacity 250ms ease, transform 250ms ease;
  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;
