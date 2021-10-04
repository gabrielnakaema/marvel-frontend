import { login } from '../../services';
import { MarvelLogo } from '../../components/MarvelLogo';
import {
  LoginPageContainer,
  ContentWrapper,
  HeadingsContainer,
  WelcomeText,
  Subheading,
  Form,
  InputTextField,
  FlexRow,
  ButtonLink,
  Button,
  SignupLink,
} from './styles';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await login();
    dispatch({ type: 'user/setUser', payload: response });
  };

  return (
    <LoginPageContainer>
      <ContentWrapper>
        <div>
          <MarvelLogo />
        </div>
        <HeadingsContainer>
          <WelcomeText>Bem vindo(a) de volta</WelcomeText>
          <Subheading>Acesse sua conta:</Subheading>
        </HeadingsContainer>
        <Form onSubmit={handleSubmit}>
          <InputTextField type="text" placeholder="Usuário" />
          <InputTextField type="password" placeholder="Senha" />
          <FlexRow>
            <input type="checkbox" id="salvar-login" />
            <label htmlFor="salvar-login">Salvar login</label>
            <ButtonLink type="button">Esqueci a senha</ButtonLink>
          </FlexRow>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Ainda não tem o login ? <SignupLink>Cadastre-se</SignupLink>
        </p>
      </ContentWrapper>
    </LoginPageContainer>
  );
};
