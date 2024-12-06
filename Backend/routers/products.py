from fastapi import APIRouter

router=APIRouter(prefix="/products",
                 tags=["Productos"],
                 responses={404:{"mensaje":"No encontrado"}})


listado_productos=["Product 1","Product 2","Product 3"]
@router.get("/")
async def product():
    return listado_productos

@router.get("/{id}")
async def product(id:int):
    return listado_productos[id]