import styled from 'styled-components';

export const LoginPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #84848d;
  font-family: 'Axiforma';
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadingsContainer = styled.div`
  text-align: left;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

export const WelcomeText = styled.h1`
  font-size: 1.875rem;
  color: red;
  font-weight: bold;
  margin: 0;
`;

export const Subheading = styled.h2`
  font-size: 1.25rem;
  font-weight: 100;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const InputTextField = styled.input`
  width: 100%;
  border: none;
  font-size: 1.375rem;
  font-family: 'Axiforma';
  padding: 1.125rem;
  border-radius: 100px;
  &::placeholder {
    color: #d1d1d6;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonLink = styled.button`
  border: none;
  font-family: 'Axiforma';
  font-size: 1rem;
  color: #84848d;
  background-color: transparent;
  text-decoration: underline;
  text-decoration-color: red;
  cursor: pointer;
  margin-left: auto;
  text-underline-offset: 5px;
  &:hover {
    color: white;
  }
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 100px;
  font-family: 'Axiforma';
  font-size: 1.5rem;
  font-weight: normal;
  padding: 0.75rem;
  background-color: red;
  color: white;
  cursor: pointer;
`;

export const SignupLink = styled.span`
  color: red;
  cursor: pointer;
`;
