import React from 'react';
import { getItem } from '../services/LocalStorageFuncs';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import imagemBotaoProfile from '../components/img/botao-editar.png';
import imagemBotaoSair from '../components/img/sair.png';


const BotaoSair = styled.img`
  width: 40px;
  height: 40px;
  border:none;
  background-color: none;
  margin: 0 auto;
`;
const TextoBotaoSair = styled.div`
  color: black;
  text-align: center;
  font-family: baskerville old face;
  border:none;
`;
const BotaoProfileEdit = styled.img`
  width: 40px;
  height: 40px;
  border:none;

`;
const TextoBotaoProfileEdit = styled.div`
  color: black;
  text-align: center;
  font-family: baskerville old face;
  
`;

const ImagemPerfil = styled.img`
  margin-left: 100px; /* Ajuste a margem conforme necessário */
  border-radius: 40%;
  max-width: 200px; /* Limita a largura da imagem */
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #0000, #539980);
  margin-top: -86px;
  padding: 20px;
  min-height: 50vh;
`;


const LeftContent = styled.div`
  flex: 1 ; /* Ocupa o espaço disponível restante */
  align-items:left;
  text-align: left;
  margin: 0 auto; /* Centraliza horizontalmente */
`;


const RightContent = styled.div`
  flex: 1; /* Ocupa o espaço disponível restante */
  align-items: right;
`;

export const Profile = (props) => {
  const user = getItem('user') || { name: '', cpf: '', email: '', saldo: '', img: '' };

  const toProfileEdit = () => {
    const { history: { push } } = props;
    push('/profile/edit');
  };

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <ProfileContainer style={{ marginBottom:'-100px'}}>
        <LeftContent>
          <h3>Olá {user.name || 'Usuário'}, essas são suas informações:</h3>
          <br /><br /><br />
          <p>{`Nome de Usuário: ${user.name}`|| 'Usuário'}</p>
          <p>{`CPF: ${user.cpf}`|| 'CPF'}</p>
          <p>{`E-mail do Usuário: ${user.email}`|| 'email@email.com'}</p>
          <p>{`Saldo: R$ ${user.saldo}`|| 'saldo'}</p>
        </LeftContent>
        <RightContent>
          <ImagemPerfil src={user.img} alt="img-user" />
        </RightContent>
      </ProfileContainer>
      <br /><br />
      
      <button style={{ marginBottom: '-80' }}>
  <Link to="/profile/edit">
    <BotaoProfileEdit src={imagemBotaoProfile} alt="EditarPerfil" />
    <TextoBotaoProfileEdit>Editar Perfil</TextoBotaoProfileEdit>
  </Link>
</button>
<button style={{ marginBottom: '-80' }}>
  <Link to="/inicial">
    <BotaoSair src={imagemBotaoSair} alt="EditarPerfil" />
    <TextoBotaoSair>Sair</TextoBotaoSair>
  </Link>
</button>
</div>
  );
};






