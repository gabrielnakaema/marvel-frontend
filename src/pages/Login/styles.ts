import styled from 'styled-components';

export const LoginPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #84848d;
  font-family: 'Axiforma';
`;

export const InputTextField = styled.input`
  width: 100%;
  border: none;
  font-size: 1.375rem;
  padding: 1rem;
  color: inherit;
  border-radius: 100px;
  &::placeholder {
    color: #d1d1d6;
  }
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 100px;
  font-size: 1.5rem;
  padding: 1rem;
  background-color: red;
  color: white;
`;
