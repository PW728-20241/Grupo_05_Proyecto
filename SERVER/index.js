import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { faker } from '@faker-js/faker';

/*import { sequelize } from "./database/database";
import { Usuario } from "./models/Usuario";
import { Orden } from "./models/Orden";
import { Producto } from "./models/Producto";
import { Serie } from "./models/Serie";*/


const app = express();
const port = 3100;

app.use(cors({
    origin: 'http://localhost:3000' 
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use('/images', express.static('Imagenes'));




/*
-----------------------------------------------------
...................ALUMNO 1..........................
-----------------------------------------------------
*/

function crearProducto(id, nombre, precio, editor, fechaRegistro, stock, imageUrl) {
    return {
        id: id,
        nombre: nombre,
        editor: editor,
        precio: precio,
        fechaRegistro: fechaRegistro,
        stock: stock,
        estado: "Activo",
        imageUrl: imageUrl,
        descripcion: faker.commerce.productDescription(),
        caracteristicas: Array.from({ length: 3 }, () => faker.commerce.productMaterial()) 
    };
}

const fila1 = [
    crearProducto(1, "Assassin's Creed II", 60.00, "Ubisoft", "2024-06-25", 10, "/images/ezio.jpeg"),
    crearProducto(2, "FIFA 2022", 49.99, "EA Sports", "2024-06-25", 15, "/images/FIFA_22.webp"),
    crearProducto(3, "God of War", 59.99, "Sony", "2024-06-25", 5, "/images/god.avif"),
    crearProducto(4, "Grand Theft Auto V", 39.99, "Rockstar", "2024-06-25", 20, "/images/Grand_Theft_Auto_V.png"),
    crearProducto(5, "Mortal Kombat I", 54.99, "NetherRealm", "2024-06-25", 12, "/images/mortal.avif")
];

const fila2 = [
    crearProducto(6, "Minecraft", 29.99, "Mojang", "2024-06-25", 30, "/images/mine.webp"),
    crearProducto(7, "Horizon Zero Dawn", 49.99, "Guerrilla", "2024-06-25", 8, "/images/hori.webp"),
    crearProducto(8, "PUBG", 19.99, "PUBG Corp", "2024-06-25", 25, "/images/pub.png"),
    crearProducto(9, "The Last Of Us Part II", 59.99, "Naughty Dog", "2024-06-25", 18, "/images/last.webp"),
    crearProducto(10, "The Last Of Us", 39.99, "Naughty Dog", "2024-06-25", 14, "/images/lastofus.avif")
];

const fila3 = [
    crearProducto(11, "Red Dead Redemption 2", 59.99, "Rockstar", "2024-06-25", 22, "/images/red.avif"),
    crearProducto(12, "Super Mario Maker", 49.99, "Nintendo", "2024-06-25", 7, "/images/Super_Mario_Maker_Artwork.jpg"),
    crearProducto(13, "God of War Ragnarok", 69.99, "Sony", "2024-06-25", 9, "/images/ragna.webp"),
    crearProducto(14, "Uncharted", 39.99, "Naughty Dog", "2024-06-25", 16, "/images/uncharted.jpg"),
    crearProducto(15, "WWE 2020", 49.99, "2K", "2024-06-25", 11, "/images/WWE_2K2.jpg")
];

const Nuevo = [
    crearProducto(16, "Magic The Gathering: Colección de Invierno Fase 2 2024 Nueva Temporada", 99.99, "Wizards of the Coast", "2024-06-25", 3, "/images/WWE_2K2.jpg"),
    crearProducto(17, "GI Joe Classified Series Big Boa, Airborne & More", 79.99, "Hasbro", "2024-06-25", 6, "/images/ufc.jpg"),
    crearProducto(18, "Spawn 30 Anniversary", 89.99, "McFarlane Toys", "2024-06-25", 4, "/images/injustice.jpg")
];

const Categorias = [
    crearProducto(19, "Colección de Items 1: Juegos para regresar al colegio", 29.99, "Various", "2024-06-25", 27, "/images/casa.jpeg"),
    crearProducto(20, "Colección de Items 2: Juegos para la casa", 19.99, "Various", "2024-06-25", 35, "/images/colegio.jpeg"),
    crearProducto(21, "Colección de Items 3: Juegos para los pequeños", 24.99, "Various", "2024-06-25", 42, "/images/niños.webp")
];

const arreglo_general = [...fila1, ...fila2, ...fila3, ...Nuevo, ...Categorias];

app.get('/contenido', (req, res) => {
    res.json({
        fila1: fila1,
        fila2: fila2,
        fila3: fila3,
        Nuevo: Nuevo,
        Categorias: Categorias
    });
});



app.get('/producto/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const producto = arreglo_general.find(p => p.id === id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});

app.get('/buscar', (req, res) => {
    const busqueda = req.query.query;
    const resultado = arreglo_general.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    res.json(resultado);
});

/*
-----------------------------------------------------
...................ALUMNO 5..........................
-----------------------------------------------------
*/


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

/**SOBRE LAS ORDENES DE ACUERDO AL DETALLE DEL USUARIO */

function crearOrdenes(id,usuarioId,fechaOrden,total,productos,estado){
    return{
        id:id,
        usuarioId:usuarioId,
        fechaOrden:fechaOrden,
        total:total,
        productos:productos,
        estado:estado
    }
};

const ordenes = [
    crearOrdenes(1,1,"11/03/2024","S/125.00",13,"Pendiente"),
    crearOrdenes(2,1,"11/04/2024","S/150.00",1,"Por Enviar"),
    crearOrdenes(3,2,"11/05/2024","S/200.00",5,"Entregado")
];

app.get('/usuarios/:id/ordenes', function(req, res) {
    const usuarioId = parseInt(req.params.id, 10);
    const ordenesUsuario = ordenes.filter(item => item.usuarioId === usuarioId);

    if (ordenesUsuario.length > 0) {
        res.json(ordenesUsuario);
    } else {
        res.status(404).send("No se encontraron órdenes para este usuario");
    }
});


/**ENDPOINTS PARA LA BASE DE DATOS EN POSTGRES */

/*async function verificacionConexion() {
    try {
        await sequelize.authenticate();
        console.log("Conexion satisfactoria con la Base de Datos");
        await sequelize.sync();
    }
    catch(error) {
        console.error("No se puede conectar a la Base de Datos", error);
    }
}*/

app.listen(port,function(){
    console.log("Servidor escuchando en el puerto "+port);
    //verificacionConexion();
});