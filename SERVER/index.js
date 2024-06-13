import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {Faker,es,es_MX} from '@faker-js/faker';

const app = express();
const port = 3100;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

function crearProductos(id,nombre,editor,precio, fechaRegistro,stock)
{
    return{
        id:id,
        nombre:nombre,
        editor:editor,
        precio:precio,
        fechaRegistro:fechaRegistro,
        stock:stock,
        estado:"Activo"
    }
}

export const faker = new Faker(
    {locale: [es_MX,es]}
);

const productos=[
    crearProductos(1,'EA SPORTS FC™ 24','Electronic Arts', 259.00,'08/06/2024',120),
    crearProductos(2,'God of War','PlayStation Publishing LLC', 159.00,'08/06/2024',85),
    crearProductos(3,'Grand Theft Auto V','Rockstar Games', 62.17,'08/06/2024',64),
    crearProductos(4,'Mortal Kombat 1','Warner Bros. Games', 83.25,'08/06/2024',150)
]

app.get("/productos-url",function(req,res)
{
    const {id, nombre, editor, estado}=req.query;
    let productoFiltrado = productos;
    if(id || nombre || editor || estado)
        {
            productoFiltrado = productoFiltrado.filter(pub=>{
                return(
                    (id && pub.id == id)||
                    (nombre && pub.nombre.toLowerCase() == nombre.toLowerCase()) ||
                    (editor && pub.editor.toLowerCase() == editor.toLowerCase()) ||
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

app.post("/productos",function(req,res)
{
    const data=req.body;
    if(data&&data.nombre&&data.editor&&data.precio&&data.fechaRegistro&&data.stock)
    {
        const nuevoID = productos.length+1;
        const nuevoProducto = crearProductos(nuevoID,data.nombre&&data.editor&&data.precio&&data.fechaRegistro&&data.stock);
        productos.push(nuevoProducto);
        res.json(nuevoProducto);
    }
    else
    {
        res.status(400).send("Faltan datos");
    }
});

app.put("/productos/:id",function(req,res)
{
    const id=req.params.id;
    const data= req.body;

    if(data.nombre&&data.editor&&data.precio&&data.fechaRegistro&&data.stock)
    {
        const producto = productos.find((pub)=>pub.id==id);
        if(producto)
        {
            producto.nombre=data.nombre;
            producto.editor=data.editor;
            producto.precio=data.precio;
            producto.fechaRegistro=data.fechaRegistro;
            producto.stock=data.stock;
            res.json(producto);
        }
        else
        {
            res.status(404).send("Producto no encontrado");
        }
    }
    else
    {
        res.status(400).send("Faltan datos");
    }
});

app.delete("/productos/:id",function(req,res)
{
    const id=req.params.id;
    const producto=productos.find((pub)=>pub.id=id);
    if(producto)
    {
        producto.estado="No activo";
        res.json(producto);
    }
    else
    {
        res.status(404).send("Producto no encontrado");
    }
});

app.listen(port,function(){
    console.log("Servidor escuchando en puerto "+port)
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
    crearUsuario(1,'Kaoru','Mitoma','correo@ejemplo.com','11/02/2022','Activo'),
    crearUsuario(2,'Phill','Phoden','correo2@ejemplo.com','11/02/2022','Activo'),
    crearUsuario(3,'Gustavo','Gomez','correo3@ejemplo.com','11/02/2022','Activo'),
    crearUsuario(4,'Gianluca','Lapadula','correo4@ejemplo.com','11/02/2022','Activo'),
];

app.get('/usuarios',function(req,res){
    res.json(usuarios);
});


/*SIRVE PARA CONSULTAR A CIERTOS USUARIOS CON CIERTOS FILTROS*/
app.get('/usuarios-url',function(req,res){
    const {correo, nombre, apellido} = req.query;
    let usuarioFiltrado = usuarios;
    if (correo || nombre || apellido){
        usuarioFiltrado = usuarioFiltrado.filter((pub)=>{
            return (
                (correo && pub.correo.toLowerCase() == correo.toLocaleLowerCase()) ||
                (nombre && pub.nombre.toLocaleLowerCase() == nombre.toLocaleLowerCase()) ||
                (apellido && pub.apellido.toLocaleLowerCase() == apellido.toLocaleLowerCase())
            );
            })
    }

    if (usuarioFiltrado.length >0){
        res.json(usuarioFiltrado);
    }
    else{
        res.status(404).send("Usuario no encontrado mi rey");
    }
});

/**SIRVE PARA AÑADIR A UN NUEVO USUARIO */

app.post("/usuarios",function(req,res){
    const datos = req.body;
    if(datos && datos.nombre && datos.apellido && datos.correo && datos.fechaRegistro){
        const nuevoId = datos.length + 1;
        const nuevoUsuario = crearUsuario(nuevoId,datos.nombre,datos.apellido,datos.correo,datos.fechaRegistro);
        usuarios.push(nuevoUsuario);
        res.json(nuevoUsuario);
    }
    else{
        res.status(404).send("Faltan datos");
    }
});

app.put("/usuarios/:id",function(req,res){
    const id = req.params.id;
    const datos = req.body;

    if(datos && datos.nombre && datos.apellido && datos.correo && datos.fechaRegistro){
        const usuarioModificar = usuarios.find((pub)=>pub.id == id);
        if(usuarioModificar){
            usuarioModificar.nombre = datos.nombre;
            usuarioModificar.apellido = datos.apellido;
            usuarioModificar.correo = datos.correo;
            usuarioModificar.fechaRegistro = datos.fechaRegistro;
            res.json(usuarioModificar);
        }
        else{
            res.status(404).send("Usuario no encontrado");
        }
    }
    else{
        res.status(404).send("Faltan completar datos");
    }
});

app.delete("usuarios/:id",function(req,res){
    const id = req.params.id;
    const usuarioEliminar = usuarios.find((pub)=>pub.id == id);
    if (usuarioEliminar){
        usuarioEliminar.estado = "Inactivo";
        res.json(usuarioEliminar);
    }
    else{
        res.status(404).send("No se encontrado usuario");
    }
});


