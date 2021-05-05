import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Login from './pages/LoginPage';
import Registrar from './pages/Registro';
import Navbar from "./components/navbar.component"
import Navbar2 from "./components/navbar2.component"
import Navbar3 from "./components/navbar3.component"
import Navbar4 from "./components/navbar4.component"
import TurnosList from "./components/turnos-list.component";
import EditTurno from "./components/edit-turno.component";  
import EditUser from "./components/edit-user.component";
import CreateTurno from "./components/create-turno.component";
import CreateUser from "./components/create-user.component";
import CreateHistory from "./components/create-history.component";
import HistorialList from "./components/historial-list-component";
import UsersList from './components/users-list.component';
import CreateReceta from './components/create-receta.component';
import RecetasList from './components/recetas-list.component';
import TurnosPaciente from './components/turnosPaciente-component';
import RecetasPaciente from './components/recetasPaciente-list';
//import {auth} from './auth';

function App() {

  let valor= localStorage.getItem("rol");
  let admin=false;
  let pac=false;
  let sec=false;
  let med=false;
  let auth=false;
  if (valor == 1) {
      admin=true;
      auth=true;
  }
  
  if (valor == 2) {
    med= true;
    auth=true;
  }
  
  if (valor == 3) {
    sec= true;
    auth=true;
  }
  
  if (valor == 4) {
    pac=true;
    auth=true;
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contacto' exact component={Contacto} />
          <Route path='/nosotros' exact component={Nosotros} />
          <Route path='/servicios' exact component={Servicios} />
          <Route path='/login' exact component={Login} />
          <Route path='/RegistrarPaciente' exact component={Registrar} />
          <div className="container">

      {admin && <Navbar/>}
      {pac && <Navbar2/>}
      {sec && <Navbar3/>}
      {med && <Navbar4/>}
      <br/>
          {auth && <Route path="/turnos" exact component={TurnosList} />}
          {auth && <Route path="/edit/:id" component={EditTurno} />}
          {auth && <Route path="/editUser/:id" component={EditUser} />}
      {auth && <Route path="/createTurno" component={CreateTurno} />}
      {auth && <Route path="/createUser" component={CreateUser} />}
      {auth && <Route path="/crearHistorial" component={CreateHistory} />}
      {auth && <Route path="/createReceta" component={CreateReceta}/>}
      {auth && <Route path="/historialList" component={HistorialList}/>}
      {auth && <Route path="/users" component={UsersList} />}
      {auth && <Route path="/recetas" component={RecetasList}/>}
      {auth && <Route path="/turnosPaciente" component={TurnosPaciente}/>}
      {auth && <Route path="/recetasPaciente" component={RecetasPaciente}/>}
      </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
