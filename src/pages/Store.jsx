import React, { useEffect, useState } from 'react'
import {BsCartCheck, BsCartPlus} from 'react-icons/bs'
import {getItem, setItem} from '../services/LocalStorageFuncs'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { ProductsArea } from '../css/style'


export const Store = () => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState (getItem ('carrinhoCell') || [])
    


    useEffect (() => {
        const fetchAPI = async () => {
            const url ='https://api.mercadolibre.com/sites/MLB/search?q=celular'
            const response = await fetch(url)
            const objJSON = await response.json()
            setData(objJSON.results)
        }
        fetchAPI()
    }, [])

const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id)
    if(element){
        const arrFilter = cart.filter((e) => e.id !== obj.id)
        setCart(arrFilter)
        setItem('carrinhoCell', arrFilter)
        }
        else{
            setCart([...cart, obj])
            setItem('carrinhoCell', [...cart, obj])
        }
    }
  return (
    <div>
        <ProductsArea>
            {
            data.map((e) => (
                <div key={e.id}>
                <h4>{e.title}</h4>
                <img src = {e.thumbnail} alt={""} />
                <h4>{`R$${e.price}`}</h4>
                <button
                onClick={()=>handleClick(e)}>
                    {
                        cart.some((itemCart) => itemCart.id === e.id ) ? (
                            <BsCartCheck />
                        ) : (   <BsCartPlus/>
                        )
                    }
                    </button>
                </div>
                ))
                }
        </ProductsArea>
    </div>
  )
}
