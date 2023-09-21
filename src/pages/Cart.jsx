import React, { useState } from 'react'
import { getItem, setItem } from '../services/LocalStorageFuncs';
import {BsCartX} from 'react-icons/bs'
import { ProductsArea } from '../css/style';



export const Cart = (props) => {
    const [data, setData] = useState(getItem('carrinhoCell') || []);

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinhoCell', arrFilter)
    }

    const handleClick = () => {
        const{history:{push}} = props;
        push(`/finishPayment/${total}`)
        setItem('carrinhoCell',[])
    }

    const total = data.reduce((acc, curr) => acc + curr.price, 0)
  return (
    <div>
        
        <h1>{`Valor total do carrinho: R$ ${total}`}</h1>
        <ProductsArea>
            {
                data.map((e) => (
                    <div key = {e.id}>
                        <h4>{e.title}</h4>
                        <img src={e.thumbnail} alt={e.title} />
                        <h4>{`R$${e.price}`}</h4>
                        <button 
                        onClick={() => removeItem(e)}
                        >
                        <BsCartX />
                        </button>
                    </div>
                ))
            }
        </ProductsArea>
        <button 
        disabled ={!total > 0}
        onClick={handleClick}
        >
            Finalizar compra 
        </button>
        <br></br>
    </div>
  )
}
