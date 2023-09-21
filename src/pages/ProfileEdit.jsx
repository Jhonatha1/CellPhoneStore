import React, { useState } from 'react';
import { getItem, setItem } from '../services/LocalStorageFuncs';

export const ProfileEdit = (props) => {
  // Verifica se o objeto 'user' existe no armazenamento local, caso contrário, cria um novo usuário.
  const user = getItem('user') || {
    name: '',
    email: '',
    password: '',
    img: '',
    cpf: '',
    saldo: '',
  };

  const [userData, setUserData] = useState(user);

  const { name, email, password, img, cpf, saldo } = userData;

  const cond =
    name.length > 3 &&
    email.includes('@') &&
    email.length > 8 &&
    password.length > 8 &&
    img.length > 5 &&
    cpf.length === 11 &&
    saldo.length > 2;

  const handleChange = (e, field) => {
    const { value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  const saveChanges = () => {
    setItem('user', userData);
    const {
      history: { push },
    } = props;
    push('/profile');
  };

  return (
    <div>
      <p>Nome:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => handleChange(e, 'name')}
      />
      <p>E-mail:</p>
      <input
        type="email"
        value={email}
        onChange={(e) => handleChange(e, 'email')}
      />
      <p>Senha:</p>
      <input
        type="password"
        value={password}
        onChange={(e) => handleChange(e, 'password')}
      />
      <p>Image URL:</p>
      <input
        type="text"
        value={img}
        onChange={(e) => handleChange(e, 'img')}
      />
      <p>CPF:</p>
      <input
        type="number"
        value={cpf}
        onChange={(e) => handleChange(e, 'cpf')}
      />
      <p>Saldo:</p>
      <input
        type="number"
        value={saldo}
        onChange={(e) => handleChange(e, 'saldo')}
      />
      <br /> <br />
      <button disabled={!cond} onClick={saveChanges}>
        Salvar
      </button>
    </div>
  );
};
