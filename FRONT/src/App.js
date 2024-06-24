import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaPrincipal from './Paginas/Alumno01/PaginaPrincipal';
import ResultadoBusqueda from './Paginas/Alumno01/ResultadoBusqueda';
import DetalleProducto from './Paginas/Alumno01/DetalleProducto';
import Dashboard from './Paginas/Alumno05/Dashboard';
import AdminProducto from './Paginas/Alumno05/AdminProducto';
import AgregarProducto from './Paginas/Alumno05/AgregarProducto';
import ListaUsuariosAdmin from './Paginas/Alumno06/ListaUsuariosAdmin';
import ListaOrdenesAdmin from './Paginas/Alumno06/ListaOrdenesAdmin';
import DetalleUsuarioAdmin from './Paginas/Alumno06/DetalleUsuarioAdmin';
import DetalleOrdenAdmin from './Paginas/Alumno06/DetalleOrdenAdmin';


function App (){
  return (
     <Router>
          <Routes>
              <Route path='' element={<PaginaPrincipal/>}/>
              <Route path='/resultado' element={<ResultadoBusqueda/>}/>
              <Route path='/detalle' element={<DetalleProducto/>}/> 
              <Route path='/Dashboard' element={<Dashboard/>}/>
              <Route path='/AgregarProducto' element={<AgregarProducto/>}/>
              <Route path='/AdminProducto' element={<AdminProducto/>}/>


              <Route path='/ListaUsuariosAdmin' element={<ListaUsuariosAdmin/>}/>
              <Route path="/usuarios/:id" element={<DetalleUsuarioAdmin/>}/>
              <Route path='/ListaOrdenesAdmin' element={<ListaOrdenesAdmin/>}/> 
              <Route path='/DetalleUsuarioAdmin' element={<DetalleUsuarioAdmin/>}/> 
              <Route path='/DetalleOrdenAdmin' element={<DetalleOrdenAdmin/>}/>              
          </Routes>
     </Router>
  );

}


export default App;
