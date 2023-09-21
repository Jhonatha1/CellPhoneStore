import React, { useState, useEffect } from 'react';
import { getItem } from '../services/LocalStorageFuncs';
import { AiFillCheckCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { Loading } from '../components/Loading';
import { MdCancel } from 'react-icons/md';

const PaymentArea = styled.div`
  span {
    font-size: 90px;
    color: green;
    text-align: center;
  }
`;

export const FinishPayment = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Carregar o usuário do armazenamento local aqui
    const loadedUser = getItem('user');
    setUser(loadedUser);
    
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const { params: { price } } = props.match;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        user && user.saldo !== undefined ? (
          user.saldo < price ? (
            <div>
              <span><MdCancel style={{ fontSize: '45px', color: 'red' }} /></span>
              <p>Seu saldo é insuficiente!</p>
            </div>
          ) : (
            <PaymentArea>
              <h3>Sua compra foi concluída com sucesso!!</h3>
              <span><AiFillCheckCircle /></span>
              <h4>{`Valor: R$${price}`}</h4>
              <h4>{`Comprador: ${user.name}`}</h4>
              <h4>{`Prazo: ${Math.ceil(Math.random()) * 20 + 1}`} dias</h4>
              <h4>{`Seu saldo da carteira agora é: R$${user.saldo - price}`}</h4>
            </PaymentArea>
          )
        ) : (
          <p>Usuário não encontrado ou saldo não definido.</p>
        )
      )}
    </>
  );
};
