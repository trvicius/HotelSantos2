import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import './LoginPage.css'
import './signup.js'
import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"
import api from './services/api'

function LoginPage() {
   const history = useHistory();
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [show, setShow] = useState(false)
   const [users, setAuth] = useState([]);

   async function handleSubmit() {
      let payload = { email, password }

      console.log({ payload })
      try {
         var response = await api.post("/auth", payload);
         localStorage.setItem("hs:token", response.data.token)
         setAuth(response.status)
         history.push("/home")
      } catch (err) {
         alert("Usuário ou senha inválidos")
         localStorage.removeItem("hs:token")
      }
   }

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

   return (
      <div className="login">
         <div className="login-logo">

         </div>

         <div className="login-right">
            <h1>Sign in</h1>
            <p> Use sua conta para logar </p>

            <div className="login-loginInputEmail">
               <MdEmail />
               <input
                  type="email"
                  placeholder="Digite um email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
            </div>

            <div className="login-loginInputPassword">
               <MdLock />
               <input
                  placeholder="Digite sua senha"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <div className="login-eye">
                  {show ? (
                     <HiEye
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                     <HiEyeOff
                        size={20}
                        onClick={handleClick}
                     />
                  )}
               </div>
            </div>

            <button type="submit" onClick={handleSubmit}>
               Entrar
               {/* <a href="./Home"> Entrar </a> */}
            </button>


            <button type="submit">
               <a href="/signup">Cadastrar</a>
            </button>
         </div>
      </div>
   )
}

export default LoginPage
