import "./Pagina.css"
import Input_user from"../components/Input_user.jsx"

export default function  Pagina_principal(){
    return(
        <div className="container">
            <h1 className="title">Buscador CEP</h1>
            <Input_user/>
        </div>
    ) 
}