import NavBar from "../Components/NavBar";
import BackGround from "../assets/backGround.png";

import { useAuthentication } from "../hooks/useAuthentication";

import { useState, useEffect } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const {login, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) => {
      e.preventDefault();

      setError("");

      const user = {
        email,
        password
      }

      const res = await login(user);

      console.log(res)
    };

    useEffect(() => {
      if(authError) {
        setError(authError);
      }
    },[authError])

  return (
        <div className="overflow-hidden flex flex-col items-center gap-10 h-[100vh] bg-[#FF0000]">
          <div className="flex flex-col items-center gap-5 text-white mt-9 w-[100vw]">
            <h1 className="font-bold text-4xl">Login</h1>
            <p>Apenas para administradores</p>
            <div className="mt-9 flex flex-col font-extralight text-xl gap-10">
            </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[95%] items-center">
                <label>
                  <span className="text-[15px] font-bold">Email</span>
                  <input className="!shadow-red-800 bg-white text-black" required type="email" name="email" value={email} onChange={(e) => {
                    setEmail(e.target.value);
                  }} placeholder="Digite seu email aqui !" />
                </label>
                <label className="shadow-none">
                  <span
                  className="text-[px] font-bold">Senha</span>
                  <input required className="!shadow-red-800 bg-white text-black" type="password" name="password" placeholder="Sua senha !" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                </label>
                {!loading && <button  className="bg-black text-white rounded-[20px] w-[50%] p-2">Entrar</button>}
               {loading && <button disabled className="bg-black text-white rounded-[20px] w-[50%] p-2">Aguarde...</button>}
               {error && <p className="error">{error}</p>}
              </form>
              <div className="sm:hidden w-[140vw] flex justify-center items-center">
                <img className="" src={BackGround} alt="" />
              </div>
              <NavBar/>
        </div>
    </div>
  )
}

export default Login