import React, { useState } from 'react';
import { setItem } from './services/LocalStorageFuncs';
import { getItem } from './services/LocalStorageFuncs';
import styled from 'styled-components';
import imagemLogin from './components/img/loginRed.png';
import { Link } from 'react-router-dom';

const PageLogin = styled.div`
  background: none;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'baskerville old face';
`;

const BotaoLogin = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: 'baskerville old face';
`;

const ImagemBotao = styled.img`
  width: 40px;
  height: 40px;
  padding: 20px;
  margin-bottom: 0;
`;

const TextoBotao = styled.span`
  margin-top: 0px;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: bottom;
  font-family: 'baskerville old face';
`;

export const Login = (props) => {
  const user = getItem('user');
  const [name, setName] = useState(user.name || '');
  const [password, setPassword] = useState(user.password || '');
  const [errorMessage, setErrorMessage] = useState('');

  const cond = name.length > 3 && password.length > 5;

  const saveUser = (name, password) => {
    const {
      history: { push },
    } = props;
    if (name === user.name && password === user.password) {
      push('/store');
      return;
    } else {
      setErrorMessage('Usuário ou senha inválidos');
      return;
    }
    setItem('user', { name, password });
    push('/store');
  };
  

  return (
    <PageLogin>
  <h1>Bem-vindo à UltraCell, faça o login abaixo:</h1>
  <form>
    <p>
      <b>Nome:</b>
    </p>
    <input
      type="text"
      onChange={({ target: { value } }) => setName(value)}
      value={name}
    />
    <p>
      <b>Senha:</b>
    </p>
    <input
      type="password"
      onChange={({ target: { value } }) => setPassword(value)}
      value={password}
    />
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    <BotaoLogin onClick={() => saveUser(name, password)} disabled={!cond}>
      <ImagemBotao src={imagemLogin} alt="Botão de Login" />
      <TextoBotao>Login</TextoBotao>
    </BotaoLogin>
  </form>
  <p>Não possui cadastro?</p>
  <Link to="/newprofile">Clique aqui para se cadastrar</Link>
</PageLogin>

  );
};
