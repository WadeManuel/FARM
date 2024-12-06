from fastapi import FastAPI
from routers import products
from routers import users
#Esto es para permiterle al frontend desde puerto 5123 enviar peticiones al backend
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

#Configurando quien puede comunicarse con mi Backend
app.add_middleware(
    CORSMiddleware,
        #Este unico dominio tiene permitido comunicarse
        allow_origins=['http://localhost:5173'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*']
)

#Routers
#Se utiliza  el router para poder unir
# Todas mis api en la clase principal y poder realizar todas las peticiones del mismo server
app.include_router(products.router)
app.include_router(users.router)


@app.get("/")
async def root():
    return "Hola Fast Api"

@app.get("/url")
async def url ():
    return {"url_curso":"htps://github.com.wadeManuel"}

@app.get("/array")
async def listadoNumeros():
    return [1200,3500,3500,4000,250,-300,10000,12302,40000,1789,2000,8000]


#Para correr el proyecto se utiliza  uvicorn main:app --reload
#Para detener el server Control+C
#Documentacion con Sawagger :http://127.0.0.1:8000/docs
#Documentacion con Redocly:http://127.0.0.1:8000/redoc
#Postman para interactura cun la api