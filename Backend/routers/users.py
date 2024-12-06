from fastapi import APIRouter,HTTPException
from pydantic import BaseModel

router=APIRouter(tags=["Usuarios"])

#Entidad Usuario
class User(BaseModel):
    id:int
    name:str
    surname:str
    url:str
    age:int
    
users_list=[User(id=1,name="Esmanuel ",surname="Pileta",url="https://github.com.wadeManuel",age=23),
       User(id=2,name="Rosa",surname="Elena",url="https://github.com.ElenaCampos",age=24),
       User(id=3,name="Jorje ",surname="Pileta",url="https://github.com.DoctorBios1990",age=33)]

@router.get("/users")
async def usersjson():
    return [{"name":"WadeManuel","surname":"Pileta","age":"23"},
            {'name':'Jorge','surname':'Benito','age':'36'},
            {'name':'Maria','surname':'Isabel','age':'16'}]

@router.get("/users1")
async def users():
    return users_list

#Buscando usuario por su id
#Path
@router.get("/user/{id}")
async def users(id:int):
    return search_user(id)

#Query
#Con el query estamos limitando que las operaciones sean de manera muy concreta 
@router.get("/userquery/")
async def users(id:int):
    return search_user(id)


            
#Funcionaliadad qye busca por el id a un usuario
def search_user(id:int):
    users=filter(lambda user:user.id==id,users_list)
    try:
        return list(users)[0]
    except:
        return "{'error':'El usuario ya existe'}"
        

#Funcionalaidad para agregar usuario
@router.post("/user/",status_code=201)
async def user(user:User):
    if type(search_user(user.id))==User:
        raise HTTPException(status_code=404,detail="El usario ya existe")
    elif user.age<=0:
        raise HTTPException(status_code=505,detail="Error la edad no puede ser menor de 1")
    users_list.append(user)
    return user

#Funcionalidad para actualizar usuario
@router.put("/user/")
async def user(user:User):
    found=False
    for index,saved_user in enumerate(users_list):
        if saved_user.id == user.id:
            users_list[index]=user
            found=True
            return user
    if not found:
        return "{'error':'No  se a actualizado '}"
    
@router.delete("/user/{id}")
async def user(id:int):
    
    found=False
    
    for index,saved_user in enumerate(users_list):
        if saved_user.id == id:
            del users_list[index]
            found=True
    if not found:
        return "{'error':'No  se a eliminado el usuario '}"
     