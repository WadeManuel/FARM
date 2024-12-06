from fastapi import FastAPI,Depends,HTTPException,status
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordRequestForm,OAuth2PasswordBearer
app=FastAPI()

oauth2=OAuth2PasswordBearer(tokenUrl="login")

class User(BaseModel):
    username:str
    email:str
    full_name:str
    disabled:bool

class UserBD(User):
    password:str
    
users_db={
    "Esmanuel":{
        "username":"wademanuel",
        "email":"epiletaalayo@gmail.com",
        "fullname":"Esmanuel Pileta",
        "disablde":True,
        "password":"Nightrider*/"
    },
    "Raidel":{
        "username":"yoshilol",
        "email":"raidelMartinez@gmail.com",
        "fullname":"Raidel Martinez",
        "disablde":False,
        "password":"12345"
    }
}

def search_user(username:str):
    if username in users_db:
        return UserBD(**users_db[username])

    
#Creando un criterio de dependecia 
async def current_user(token:str=Depends(oauth2)):
    user=search_user(token)
    if not user:
          raise HTTPException(status.HTTP_401_UNAUTHORIZED,
                detail="Credenciales de autenticación inválidas",
                headers={"WWW-Autenticate":"Bearer"})
    return user
        
@app.post("/login")
async def login(form:OAuth2PasswordRequestForm=Depends()):
    user_db=users_db.get(form.username)
    print("Aqui esta el error",user_db )
    if not users_db:
         raise HTTPException(status.HTTP_400_BAD_REQUEST,detail="El usario no existe")
     
    user=search_user(form.username)
    if not form.password == user.password:
         raise HTTPException(status.HTTP_400_BAD_REQUEST,detail="La constraseña no es correcta")
    return {"acces_token":user.username,"token_type":"bearer"}


# Dependes sig que el usuario deve de estar autenticado
@app.get("/user/me/")
async def me( user:User=Depends(current_user)):
    return user