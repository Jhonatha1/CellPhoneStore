import React from 'react';
import { getItem } from '../services/LocalStorageFuncs';
import styled from 'styled-components';
import { Header } from '../components/Header';


const ImagemPerfil = styled.img`
  margin-left: 100px; /* Ajuste a margem conforme necessário */
  border-radius: 40%;
  max-width: 200px; /* Limita a largura da imagem */
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center; 

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
  const user = getItem('user');

  const toProfileEdit = () => {
    const { history: { push } } = props;
    push('/profile/edit');
  };

  return (
    
    <div>
      <h1>Perfil do Usuário</h1>
      <ProfileContainer>
        <LeftContent>
          <h3>Olá {user.name}, essas são suas informações:</h3>
          <br /><br /><br />
          <p>{`Nome de Usuário: ${user.name}`}</p>
          <p>{`CPF: ${user.cpf}`}</p>
          <p>{`E-mail do Usuário: ${user.email}`}</p>
          <p>{`Saldo: R$ ${user.saldo}`}</p>
        </LeftContent>
        <RightContent>
          <ImagemPerfil src={user.img} alt="img-user" />
        </RightContent>
      </ProfileContainer>
      <br /><br />
      <button onClick={toProfileEdit}>
        Editar Perfil
      </button>
      <button onClick={() => props.history.push('/')}>
        Logout
      </button>
    </div>
  );
};
