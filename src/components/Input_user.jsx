import { useState } from "react"
import "./Input_user.css"

import api from "../services/api";

export default function Input_user(){

    const[input_cep, set_input_cep] = useState("")
    const[cep, set_cep] = useState({})

    async function mostrar_resposta(){
        // 01310930/json/

        if(input_cep === ""){
            return alert("Preencha algum CEP...");
            
        }

        try{
            const resposta = await api.get(`${input_cep}/json`)
            set_cep(resposta.data)
            console.log(cep)
            set_input_cep("")
        }catch{
            alert("Ops erro ao buscar o CEP...")
            set_input_cep("")
        }

    }
    return(
        
      <div class="container_p">
          <div className="container_input">
            <input type="text" placeholder="Digite seu CEP..." maxLength={8} value={input_cep} onChange={(e)=> set_input_cep(e.target.value)}/>
            <button className="bt_procurar" onClick={mostrar_resposta}>
                <img src="https://st.depositphotos.com/1041273/3800/v/600/depositphotos_38005243-stock-illustration-vector-magnifying-glass.jpg" width="25" height="25"/>
            </button>
        </div>

        {Object.keys(cep).length > 0 && (
            <div className="resposta_api">
                <h2> <div class="ind">CEP:</div> {cep.cep}</h2>
                <span><div class="ind">Rua:</div> {cep.logradouro}</span>
                <span><div class="ind">Complemento:</div> {cep.complemento}</span>
                <span><div class="ind">Bairro:</div> {cep.bairro}</span>
                <span><div class="ind">Cidade:</div>{cep.localidade} <div class="ind">-</div> {cep.uf}</span>
            </div>
        )}
       
      </div>


    )
}
