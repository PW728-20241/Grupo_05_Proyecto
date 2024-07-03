import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { faker } from '@faker-js/faker';

import { sequelize } from "./database/database.js";
//import { Usuario } from "./models/Usuario";
//import { Orden } from "./models/Orden";
import { Producto } from "./models/Producto.js";
import { Sequelize } from "sequelize";
//import { Serie } from "./models/Serie";


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

async function verificacionConexion(){
    try{
        sequelize.authenticate();
        console.log("Conexion satisfactoria con la BD");
        await sequelize.sync();
    }
    catch(error){
        console.error("No se puede conectar a la BD",error);
    }
}


/*
-----------------------------------------------------
...................ALUMNO 1..........................
-----------------------------------------------------
*/

/*function crearProducto(id, nombre, precio, editor, fechaRegistro, stock, imageUrl, categoria, nuevo) {
    return {
        id: id,
        nombre: nombre,
        editor: editor,
        precio: precio,
        fechaRegistro: fechaRegistro,
        stock: stock,
        estado: "Activo",
        imageUrl: imageUrl,
        categoria: categoria,
        nuevo: nuevo,
        descripcion: faker.commerce.productDescription(),
        caracteristicas: Array.from({ length: 5 }, () => faker.commerce.productMaterial())
    };
}*/

/*const productos = [
    crearProducto(1, "Assassin's Creed II", 60.00, "Ubisoft", "2024-06-25", 10, "/images/ezio.jpeg", "Aventura", false),
    crearProducto(2, "FIFA 2022", 49.99, "EA Sports", "2024-06-25", 15, "/images/FIFA_22.webp", "Deportes", false),
    crearProducto(3, "God of War", 59.99, "Sony", "2024-06-25", 5, "/images/god.avif", "Acción", false),
    crearProducto(4, "Grand Theft Auto V", 39.99, "Rockstar", "2024-06-25", 20, "/images/Grand_Theft_Auto_V.png", "Aventura", false),
    crearProducto(5, "Mortal Kombat I", 54.99, "NetherRealm", "2024-06-25", 12, "/images/mortal.avif", "Lucha", false),
    crearProducto(6, "Minecraft", 29.99, "Mojang", "2024-06-25", 30, "/images/mine.webp", "Aventura", false),
    crearProducto(7, "Horizon Zero Dawn", 49.99, "Guerrilla", "2024-06-25", 8, "/images/hori.webp", "Aventura", false),
    crearProducto(8, "PUBG", 19.99, "PUBG Corp", "2024-06-25", 25, "/images/pub.png", "Disparos", false),
    crearProducto(9, "The Last Of Us Part II", 59.99, "Naughty Dog", "2024-06-25", 18, "/images/last.webp", "Aventura", false),
    crearProducto(10, "The Last Of Us", 39.99, "Naughty Dog", "2024-06-25", 14, "/images/lastofus.avif", "Aventura", false),
    crearProducto(11, "Red Dead Redemption 2", 59.99, "Rockstar", "2024-06-25", 22, "/images/red.avif", "Aventura", false),
    crearProducto(12, "Super Mario Maker", 49.99, "Nintendo", "2024-06-25", 7, "/images/Super_Mario_Maker_Artwork.jpg", "Plataformas", false),
    crearProducto(13, "God of War Ragnarok", 69.99, "Sony", "2024-06-25", 9, "/images/ragna.webp", "Acción", false),
    crearProducto(14, "Uncharted", 39.99, "Naughty Dog", "2024-06-25", 16, "/images/uncharted.jpg", "Aventura", false),
    crearProducto(15, "WWE 2020", 49.99, "2K", "2024-06-25", 11, "/images/WWE_2K2.jpg", "Deportes", false),


    crearProducto(16, "Magic The Gathering: Colección de Invierno Fase 2 2024 Nueva Temporada", 99.99, "Wizards of the Coast", "2024-06-25", 3, "/images/WWE_2K2.jpg", "Various", true),
    crearProducto(17, "GI Joe Classified Series Big Boa, Airborne & More", 79.99, "Hasbro", "2024-06-25", 6, "/images/ufc.jpg", "Various", true),
    crearProducto(18, "Spawn 30 Anniversary", 89.99, "McFarlane Toys", "2024-06-25", 4, "/images/injustice.jpg", "Various", true),


    crearProducto(19, "Colección de Items 1: Juegos para regresar al colegio", 29.99, "Various", "2024-06-25", 27, "/images/casa.jpeg", "Colección", false),
    crearProducto(20, "Colección de Items 2: Juegos para la casa", 19.99, "Various", "2024-06-25", 35, "/images/colegio.jpeg", "Colección", false),
    crearProducto(21, "Colección de Items 3: Juegos para los pequeños", 24.99, "Various", "2024-06-25", 42, "/images/niños.webp", "Colección", false)
];*/


/*app.get('/contenido', function(req, res){
    res.json(productos);
});*/

app.get("/productos", async function(req,res){
    const listaProducto = await Producto.findAll();
    res.json(listaProducto);

});

app.post('/productos1', async function(req, res) {
    const data = req.body;

    if (Array.isArray(data) && data.every(product => 
        product.nombre && 
        product.editor && 
        product.precio && 
        product.fechaRegistro && 
        product.stock && 
        product.estado && 
        product.imageUrl && 
        product.descripcion && 
        product.caracteristicas && 
        product.categoria && 
        product.nuevo
    )) {
        try {
            const productosCreados = await Producto.bulkCreate(data);
            res.status(201).json(productosCreados);
        } catch (error) {
            console.error("Error interno al crear los productos:", error);
            res.status(500).send("Error interno al crear los productos");
        }
    } else {
        res.status(400).send("Faltan datos");
    }
});


/*app.get('/producto/id/:id', function(req, res) {
    const id = parseInt(req.params.id, 10);
    const producto = productos.find(p => p.id === id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});*/

app.get('/producto/id/:id', async function(req, res) {
    const id = parseInt(req.params.id, 10);
    const producto = await Producto.findByPk(id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});

/*app.get('/producto/nombre/:nombre', function(req, res){
    const nombre = req.params.nombre.toLowerCase();
    const producto = productos.find(pub => pub.nombre.toLowerCase() === nombre);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).send("Producto no encontrado");
    }
});*/

app.get('/producto/nombre/:nombre', async function(req, res){
    const nombre = req.params.nombre.toLowerCase();
    const producto = await Producto.findOne({
        where: {
            nombre: nombre
        }
    });
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).send("Producto no encontrado");
    }
});

/*app.get('/buscar', function(req, res) {
    const query = req.query.query.toLowerCase();
    const resultados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(query)
    );
    res.json(resultados);
});*/

app.get('/buscar', async function(req, res) {

    const query = req.query.query.toLowerCase();   
    const resultados = await Producto.findAll({
            where: {
                nombre: {
                    [Sequelize.Op.iLike]: `%${query}%`  // Case-insensitive search
                }
            }
        });
        
        if (resultados.length > 0) {
            res.json(resultados);
        } else {
            res.status(404).send("No se encontraron productos que coincidan con la búsqueda.");
        }
    
});

/*
-----------------------------------------------------
...................ALUMNO 5..........................
-----------------------------------------------------
*/


app.get("/productos-url",function(req,res)
{   
    const {id, nombre, editor, estado}=req.query;
    let productoFiltrado = arreglo_general;
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
app.get("/productos5",function(req,res){
    res.json(arreglo_general);
});

app.get("/productos/random", function (req, res) {
    const randomItems = arreglo_general.sort(() => 0.5 - Math.random()).slice(0, 5);
    res.json(randomItems);
});

app.post("/productos",function(req,res)
{
    const data=req.body;
    if(data&&data.nombre&&data.editor&&data.precio&&data.fechaRegistro&&data.stock)
    {
        const nuevoID = arreglo_general.length+1;
        const nuevoProducto = crearProducto(nuevoID,data.nombre&&data.editor&&data.precio&&data.fechaRegistro&&data.stock);
        arreglo_general.push(nuevoProducto);
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
        const producto = arreglo_general.find((pub)=>pub.id==id);
        if(producto)
        {
            arreglo_general.nombre=data.nombre;
            arreglo_general.editor=data.editor;
            arreglo_general.precio=data.precio;
            arreglo_general.fechaRegistro=data.fechaRegistro;
            arreglo_general.stock=data.stock;
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
    const producto=arreglo_general.find((pub)=>pub.id==id);
    if(producto)
    {
        producto.estado="Eliminado";
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
function crearUsuario(id, nombre, apellido, correo, password, fechaRegistro, estado) {
    return {
        id: id,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        password: password,
        fechaRegistro: fechaRegistro,
        estado: estado
    }
}

const usuarios = [
    crearUsuario(1, 'Kaoru', 'Mitoma', 'correo@ejemplo.com', 'password1', '11/02/2022', 'Activo'),
    crearUsuario(2, 'Phill', 'Phoden', 'correo2@ejemplo.com', 'password2', '11/02/2022', 'Activo'),
    crearUsuario(3, 'Gustavo', 'Gomez', 'correo3@ejemplo.com', 'password3', '11/02/2022', 'Activo'),
    crearUsuario(4, 'Gianluca', 'Lapadula', 'correo4@ejemplo.com', 'password4', '11/02/2022', 'Activo'),
];

app.post('/registrar', (req, res) => {
    const { nombre, apellido, correo, password } = req.body;
    const nuevoID = usuarios.length + 1;
    const nuevoUsuario = crearUsuario(nuevoID, nombre, apellido, correo, password, new Date().toISOString().split('T')[0], 'Activo');
    usuarios.push(nuevoUsuario);
    res.json(nuevoUsuario);
});

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

app.get('/ordenes',function(req,res){
    res.json(ordenes);
});

/**SIRVE PARA VER TODA LA LISTA DE ORDENES **/
app.get('/ordenes-url',function(req,res){
    const {id, usuario} = req.query;
    let ordenFiltrado = ordenes;
    if (id || usuario){
        ordenFiltrado = ordenFiltrado.filter((pub)=>{
            return (
                (id && pub.id.toLowerCase() == id.toLocaleLowerCase()) ||
                (usuario && pub.usuarioId.toLocaleLowerCase() == usuario.toLocaleLowerCase())
            );
            })
    }

    if (ordenFiltrado.length >0){
        res.json(ordenFiltrado);
    }
    else{
        res.status(404).send("Orden no encontrado");
    }
});
function crearSeries(id, nombre, descripcion, fechaCreacion, productos) {
    return {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        fechaCreacion: fechaCreacion,
        nroproductos: productos.length,
        productos: productos
    };
}

const series = [
    crearSeries(1, "Mortal Kombat", "Colección de la serie de MK", "11/02/2022", ["Mortal Kombat"]),
    crearSeries(2, "Grand Theft Auto", "Colección del GTA", "1/07/2024", ["Grand Theft Auto V"])
];

// Endpoint para obtener todas las series con sus productos
app.get("/series", (req, res) => {
    const seriesResponse = series.map(serie => ({
        id: serie.id,
        nombre: serie.nombre,
        descripcion: serie.descripcion,
        fechaCreacion: serie.fechaCreacion,
        nroproductos: serie.productos.length
    }));
    res.json(seriesResponse);
});

app.get('/series/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const serie = series.find(s => s.id === id);
    if (serie) {
        res.json(serie);
    } else {
        res.status(404).send("Serie no encontrada");
    }
});

app.put('/series/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const serie = series.find(s => s.id === id);
    if (serie) {
        Object.assign(serie, req.body);
        res.json(serie);
    } else {
        res.status(404).send("Serie no encontrada");
    }
});
app.post('/series', (req, res) => {
    const nuevaSerie = req.body;
    nuevaSerie.id = series.length + 1;
    nuevaSerie.nroproductos = nuevaSerie.productos.length;
    series.push(nuevaSerie);
    res.json(nuevaSerie);
});

// Datos en memoria para el ejemplo
let carrito = [];
let guardadosParaDespues = [];

// Obtener el carrito de compras
app.get('/carrito', (req, res) => {
  res.json(carrito);
});

// Añadir producto al carrito de compras
app.post('/carrito', (req, res) => {
  const producto = req.body;
  carrito.push(producto);
  res.json(carrito);
});

// Eliminar producto del carrito de compras
app.delete('/carrito/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  carrito = carrito.filter(producto => producto.id !== id);
  res.json(carrito);
});

// Mover producto a guardados para después
app.post('/guardarParaDespues', (req, res) => {
    const producto = req.body;
    guardadosParaDespues.push(producto);
    carrito = carrito.filter(p => p.id !== producto.id);
    res.json({ carrito, guardadosParaDespues });
  });
  
  // Obtener los guardados para después
  app.get('/guardadosParaDespues', (req, res) => {
    res.json(guardadosParaDespues);
  });
  
  // Mover producto del guardado para después al carrito
  app.post('/moverAlCarrito', (req, res) => {
    const producto = req.body;
    carrito.push(producto);
    guardadosParaDespues = guardadosParaDespues.filter(p => p.id !== producto.id);
    res.json({ carrito, guardadosParaDespues });
  });

  const ordenes1 = [];

  app.get('/productos', (req, res) => {
    res.json(productos);
  });
  
  app.get('/producto/id/:id', (req, res) => {
    const { id } = req.params;
    const producto = productos.find(p => p.id == id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  });
  
  app.post('/ordenes', (req, res) => {
    const nuevaOrden = { id: uuidv4(), ...req.body };
    ordenes.push(nuevaOrden);
    res.json(nuevaOrden);
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
    verificacionConexion();
});