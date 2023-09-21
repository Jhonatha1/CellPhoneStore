import React ,{useState} from 'react'
import { getItem,setItem } from '../services/LocalStorageFuncs'

export const ProfileEdit = (props) => {
    const user = getItem('user')
    const [name, setName] = useState(user.name || '')
    const [email, setEmail] = useState(user.email ||'')
    const [password, setPassword] = useState(user.password ||'')
    const [confirmpassword, setconfirmPassword] = useState(user.password ||'')
    const [img, setImage] = useState(user.img ||'')
    const [cpf, setCpf] = useState(user.cpf||'')
    const [saldo, setSaldo] = useState(user.saldo||'')

    const cond = (
        name.length >3 &&
        email.includes('@') &&
        email.length >8 &&
        password.length >8 &&
        img.length >5 &&
        cpf.length ===11 &&
        saldo.length >2
        
    )

    const saveChanges = () => {
    setItem('user', {name, email, password, img, cpf,saldo})
    const {history:{push}} = props;
    push('/profile')
    }
     
  return (
    <div>
        <p>Nome:</p>
        <input type="text" value ={name} onChange={({target:{value}})=>setName(value)}/>
        <p>E-mail:</p>
        <input type="email" value ={email} onChange={({target:{value}})=>setEmail(value)}/>
        <p>Senha:</p>
        <input type="password" value ={password} onChange={({target:{value}})=>setPassword(value)}/>
        <p>Image URL:</p>
        <input type="text" value ={img} onChange={({target:{value}})=>setImage(value)}/>
        <p>CPF:</p>
        <input type="number" value ={cpf} onChange={({target:{value}})=>setCpf(value)}/>
        <p>Saldo:</p>
        <input type="number" value ={saldo} onChange={({target:{value}})=>setSaldo(value)}/>
        <br/> <br/>
        <button
        disabled={!cond}
        onClick={saveChanges}
        >
            Salvar
        </button>
    </div>
  )
}
