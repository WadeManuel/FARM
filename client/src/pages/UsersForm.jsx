import { useState,useEffect } from "react";
import "./Form.css"
import { useParams,useNavigate } from "react-router-dom";
import Header from "../componentes/Header"
import { fecthUser,createUser,updateUser } from "../api/users";


function UsersForm() {

    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [surname,setSurname]=useState('')
    const [url,setUrl]=useState('')
    const [age,setAge]=useState('')
    const paramas=useParams()
    console.log(paramas)
    const navigate=useNavigate()
    

    //Estoy haciendo una petición desde fronted al backend de Tipo Post 
    const handleSubmit =async (e)=>{
      e.preventDefault();
      //Si no estamos editando crea un nuevo usario
      try {
        if(!paramas.id){
            const res=await createUser({id,name,surname,url,age})
            console.log(res)
       
        }else{
            const res=await updateUser({id,name,surname,url,age})
            console.log(res)
        }
        navigate("/ListUsers")
      }catch (error) {
        console.log(error)
      }
      e.target.reset(); 
    }

    useEffect(()=>{
      if(paramas.id){
        fecthUser(paramas.id)
        .then(res=>{
          setName(res.data.name)
          setSurname(res.data.surname)
          setUrl(res.data.url)
          setAge(res.data.age)
        })
        .catch((err)=>console.log(err));
    
      } 
    },[]);

    return (
      <main>
        <Header></Header>
          <section className="section">
        <div className="content-form">
            <form className="formulario" onSubmit={handleSubmit}>
              <div className="encabezado">
                <h2>Formulario Insertar Usuario</h2>
              </div>


                <div className="form-input">
                  <input 
                    type="number"
                    placeholder="Id"
                    required
                    onChange={(e)=>setId(e.target.value)}
                    value={id}
                  />
                  <input 
                    type="text"
                    title="No se permite numeros" 
                    placeholder="Name"
                    required
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                  />

                  <input 
                    type="text"
                    placeholder="Surname"
                    required
                    onChange={(e)=>setSurname(e.target.value)}
                    value={surname}
                  />

                  <input 
                    type="text"
                    placeholder="Url"
                    required
                    onChange={(e)=>setUrl(e.target.value)}
                    value={url}
                  />

                  <input 
                    type="number"
                    placeholder="Age"
                    min="1"
                    max="110"
                    required 
                    onChange={(e)=>setAge(e.target.value)}
                    value={age}
                  />
                </div>

                <div className="content-btn">
                    <button className="btn">{paramas.id ? 'Update':'Save'}</button>
                </div>
              

            </form>

          </div>
      </section>
      </main>
    )
  }
  
  export default UsersForm