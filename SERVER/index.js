import express from "express";
import cors from "cors";
import { es_MX,es,Faker } from "@faker-js/faker";
const app = express();
const port = 3100;

app.use(cors());

export const faker= new Faker(
    {locale:[es_MX,es]}
);

app.use(express.json());

function crearProductos(id,detalle,serie,precio, fechaRegistro,stock)
{
    return{
        id:id,
        detalle:detalle,
        serie:serie,
        precio:precio,
        fechaRegistro:fechaRegistro,
        stock:stock,
        estado:"Activo"
    }
}

const productos=[
    crearProductos(1,'Manga Dragon Ball Vol 1','Dragon Ball', 'S/ 39.99','11/02/2024',35),
    crearProductos(2,'Manga Sailor Moon Vol 1','Sailor Moon', 'S/ 39.99','11/02/2024',50),
    crearProductos(3,'Loki Funko Pop','Marvel', 'S/ 39.99','11/02/2024',100),
    crearProductos(4,'Manga Dragon Ball Vol 2','Dragon Ball', 'S/ 39.99','11/02/2024',86)
]




app.get("/productos-url",function(req,res)
{
    const {id, detalle, serie, estado}=req.query;
    let productoFiltrado = productos;
    if(id || detalle || serie || estado)
        {
            productoFiltrado = productoFiltrado.filter(pub=>{
                return(
                    (id && pub.id == id)||
                    (detalle && pub.detalle.toLowerCase() == detalle.toLowerCase()) ||
                    (serie && pub.serie.toLowerCase() == serie.toLowerCase()) ||
                    (estado && pub.estado.toLowerCase() == estado.toLowerCase())
                );
            })
        }
    if(productoFiltrado.length >0)
    {
        res.json(productoFiltrado);
    }
    else
    {
        res.status(404).send("Producto no encontrado");
    }
});
app.get("/productos",function(req,res){
    res.json(productos);
});

app.listen(port,function(){
    console.log("Servidor escuchando en puerto "+port)
});

app.post("/productos",function(req,res)
{
    const data = req.body;
    if(data&&data.detalle&&data.serie&&data.precio&&data.fechaRegistro&&data.stock)
    {
        const nuevoID = productos.length+1;
        const nuevoProducto = crearProductos(nuevoID,data.detalle,data.serie,data.precio,data.fechaRegistro,data.stock);
        productos.push(nuevoProducto);
        res.json(nuevoProducto);
    }
    else
    {
        res.status(400).send("Faltan datos");
    }
}); 

/*
-----------------------------------------------------
...................ALUMNO 6..........................
-----------------------------------------------------
*/

function crearUsuario (id,nombre,apellido,correo,fechaRegistro,estado){
    return {
        id: id,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        fechaRegistro: fechaRegistro,
        estado: estado
    }
};

const usuarios = [
    crearUsuario(1,'Antonio','Lopez Caro','correo@sanchez.com','11/02/2022','Activo'),
    crearUsuario(2,'Ana','Bucker','correo2@sanchez.com','11/02/2022','Activo'),
    crearUsuario(3,'Gustavo','Gomez','correo3@sanchez.com','11/02/2022','Activo'),
    crearUsuario(4,'Gianluca','Ladula','correo4@sanchez.com','11/02/2022','Activo'),
];

app.get('/usuarios/:id',function(req,res){
    res.json(usuarios);
});




