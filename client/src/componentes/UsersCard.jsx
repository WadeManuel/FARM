import { useNavigate } from "react-router-dom"
import axios from "axios"


function UsersCard({users}){

    const navigate=useNavigate()

    const handleClick=()=>{
        navigate(`/UsersForm/${users.id}`)
    }

    async function eliminarUsuario(){
        const res=await axios.delete(`http://localhost:8000/user/${users.id}`)
        navigate('/ListUsers')    
    }

    return(
        <div  className="content-info">
            <p>{users.name}</p>
            <p>{users.surname}</p>
            <p>{users.url}</p>
            <p>{users.age}</p>
            <div className="content-opciones">
                <a href="" onClick={handleClick} className="btn-editar">Editar</a>
                <a href="" onClick={eliminarUsuario} className="btn-eliminar" >Eliminar</a>
            </div>
           
        </div>
    )
}

export default UsersCard