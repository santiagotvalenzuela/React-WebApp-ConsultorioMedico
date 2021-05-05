import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import './Consulta/FormConsulta.css';



import Button from '@material-ui/core/Button';
export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserDni = this.onChangeUserDni.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeApellido = this.onChangeApellido.bind(this);
    
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangeTelefono = this.onChangeTelefono.bind(this);
    this.onChangeobraSocial=this.onChangeobraSocial.bind(this);
    this.onChangecarnet=this.onChangecarnet.bind(this);
    this.onChangeFecNac = this.onChangeFecNac.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dni: '',
      password: '',
      nombre: '',
      apellido: '',
      rol: 4,
      mail: '',
      telefono: '',
      obraSocial:'',
      carnet:'',
      fecNac: new Date()
    }
  }

  onChangeUserDni(e) {
    this.setState({
      dni: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    })
  }
  onChangeApellido(e) {
    this.setState({
      apellido: e.target.value
    })
  }
  
  onChangeMail(e) {
    this.setState({
      mail: e.target.value
    })
  }
  onChangeTelefono(e) {
    this.setState({
      telefono: e.target.value
    })
  }
  onChangeFecNac(date) {
    this.setState({
      fecNac: date
    })
  }
  
  onChangeobraSocial(e) {
    this.setState({
      obraSocial:e.target.value
    })
  }
  onChangecarnet(e) {
    this.setState({
      carnet:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      dni: this.state.dni,
      password: this.state.password,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      rol: 4,
      mail: this.state.mail,
      telefono: this.state.rol,
      obraSocial: this.state.obraSocial,
      carnet: this.state.carnet,
      fecNac: this.state.fecNac
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    window.location = '/login';

    this.setState({
      dni: ''
    })
  }

  render() {
    return (
      <Grid container justify="center" className="contenedor" xs={8}>
        
        <div>
        <div style={{height:20}} />
          <h3>Registrar paciente</h3>
          <div style={{height:20}} />
        <form onSubmit={this.onSubmit}>
        <div className="form-Registro">
            <label>DNI: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.dni}
                onChange={this.onChangeUserDni}
                />
          </div>
          <div className="form-Registro">
            <label>Contraseña: </label>
            <input 
                type="password" 
                className="form-control"
                value={this.state.contrasena}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-Registro">
            <label>Nombre: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.nombre}
                onChange={this.onChangeNombre}
                />
          </div>
          <div className="form-Registro">
            <label>Apellido: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.apellido}
                onChange={this.onChangeApellido}
                />
          </div>
          <div className="form-Registro">
            <label>Fecha de Nacimiento: </label>
            <div>
              <DatePicker
                selected={this.state.fecNac}
                onChange={this.onChangeFecNac}
              />
            </div>
          </div>
        
          <div className="form-Registro">
            <label>Mail: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.mail}
                onChange={this.onChangeMail}
                />
          </div>
          <div className="form-Registro">
            <label>Telefono: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.telefono}
                onChange={this.onChangeTelefono}
                />
          </div>     
          <div className="form-Registro">
            <label>Obra Social: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.obraSocial}
                onChange={this.onChangeobraSocial}
                />
          </div>  
          <div className="form-Registro">
            <label>Número carnet obra social: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.carnet}
                onChange={this.onChangecarnet}
                />
          </div>      
            <div className="form-Registro">
            < Button color="secondary" variant="contained" onClick={this.onSubmit}           
                  >
                      Registrarse
                      
                    </Button>
            </div>
            <div style={{height:20}} />
          </form>  
        </div>
        </Grid>
    )
  }
}