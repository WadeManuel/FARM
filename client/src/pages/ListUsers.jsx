import { useState,useEffect } from "react"
import "./List.css"
import UsersCard from "../componentes/UsersCard";
import { Link } from "react-router-dom";
import Header from "../componentes/Header";
import { listUsers } from "../api/users";


function ListUsers() {

    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
        async function fechUsers() {
          const res=await listUsers()
                setUsers(res.data)
                console.log(res.data);
        }
        fechUsers()   
    },[]);


    return (
    <main>
        <Header></Header>
        <section className="section-usuarios">
      
      <div className="contenedor-Usuarios">
          <div className="content-h1">
              <h1>Listado Usuarios</h1>
             <Link to="/UsersForm/new">Creaar Usuario</Link>
          </div>

          <div className="encabezado-info-usuarios">
              <p>Nombre</p>
              <p>Apellido</p>
              <p>Url</p>
              <p>Edad</p>
              <p>Opciones</p>
          </div>
     
      {
          //Voy a recorrer el listado de Usario lo voy mostrando al Client con map
          users.map(users =>(
             <UsersCard users={users} key={users.id} />
          ))
      }
       
      </div>
  </section>
    </main>
   
    
    )
  }
  
  export default ListUsers