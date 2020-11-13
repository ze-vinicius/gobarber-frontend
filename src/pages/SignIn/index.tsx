import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>

        <input type="text" placeholder="email" />

        <input type="password" placeholder="senha" />

        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar conta
      </a>

    </Content>
    <Background />
  </Container>
);

export default SignIn;
