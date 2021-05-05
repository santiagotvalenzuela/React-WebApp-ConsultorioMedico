import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserDni = this.onChangeUserDni.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeApellido = this.onChangeApellido.bind(this);
    this.onChangeRol = this.onChangeRol.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangeTelefono = this.onChangeTelefono.bind(this);
    this.onChangeFecNac = this.onChangeFecNac.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dni: '',
      password: '',
      nombre: '',
      apellido: '',
      rol: '',
      mail: '',
      obraSocial:'',
      carnet:'',
      telefono: '',
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
  onChangeRol(e) {
    this.setState({
      rol: e.target.value
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

  onSubmit(e) {
    e.preventDefault();

    const user = {
      dni: this.state.dni,
      password: this.state.password,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      rol: this.state.rol,
      mail: this.state.mail,
      telefono: this.state.rol,
      obraSocial:' ',
      carnet:' ',
      fecNac: this.state.fecNac
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    window.location = '/users';

    this.setState({
      dni: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Crear un usuario</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group">
          <label>DNI: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.dni}
              onChange={this.onChangeUserDni}
              />
        </div>
        <div className="form-group">
          <label>Contraseña: </label>
          <input 
              type="password" 
              className="form-control"
              value={this.state.contrasena}
              onChange={this.onChangePassword}
              />
        </div>
        <div className="form-group">
          <label>Nombre: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.nombre}
              onChange={this.onChangeNombre}
              />
        </div>
        <div className="form-group">
          <label>Apellido: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.apellido}
              onChange={this.onChangeApellido}
              />
        </div>
        <div className="form-group">
          <label>Fecha de Nacimiento: </label>
          <div>
            <DatePicker
              selected={this.state.fecNac}
              onChange={this.onChangeFecNac}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Rol: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.rol}
              onChange={this.onChangeRol}
              />
        </div>
        <div className="form-group">
          <label>Mail: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.mail}
              onChange={this.onChangeMail}
              />
        </div>
        <div className="form-group">
          <label>Telefono: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.telefono}
              onChange={this.onChangeTelefono}
              />
        </div>        
          <div className="form-group">
            <input type="submit" value="Crear usuario" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}