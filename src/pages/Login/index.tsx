import { MarvelLogo } from '../../components/MarvelLogo';
import { LoginPageContainer, InputTextField, Button } from './styles';

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <div>
        <MarvelLogo />
      </div>
      <h1>Bem vindo(a)de volta</h1>
      <h2>Acesse sua conta:</h2>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <InputTextField type="text" placeholder="Usuário" />
        <InputTextField type="password" placeholder="Senha" />

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input type="checkbox" id="salvar-login" />
          <label htmlFor="salvar-login">Salvar login</label>

          <a
            href="#"
            style={{
              marginLeft: 'auto',
              textDecorationColor: 'red',
              color: '#84848d',
            }}
          >
            Esqueci a senha
          </a>
        </div>
        <Button type="submit">Entrar</Button>
      </form>
      <p>
        Ainda não tem o login ?{' '}
        <span style={{ color: 'red' }}>Cadastre-se</span>
      </p>
    </LoginPageContainer>
  );
};
