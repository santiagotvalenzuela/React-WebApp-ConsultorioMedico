import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeRol = this.onChangeRol.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangeTelefono = this.onChangeTelefono.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      password: '',
      nombre: '',
      rol:0,
      mail: '',
      telefono:0,
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          password: response.data.password,
          nombre: response.data.nombre,
          rol: response.data.rol,
          mail: response.data.mail,
          telefono: response.data.telefono
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.dni),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeDni(e) {
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

  onSubmit(e) {
    e.preventDefault();

    const user = {
      dni: this.state.dni,
      password: this.state.password,
      nombre: this.state.nombre,
      rol: this.state.rol,
      mail: this.state.mail,
      telefono: this.state.telefono
    }

    console.log(user);

    axios.post('http://localhost:5000/users/update/' + this.props.match.params.id, user)
      .then(res => console.log(res.data));

    window.location = '/users';
  }

  render() {
    return (
    <div>
      <h3>Modificar datos del Usuario</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Contraseña: </label>
          <input 
              type="password" 
              className="form-control"
              value={this.state.password}
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
          <label>Rol: </label>
          <input 
              type="number" 
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
          <input type="submit" value="Editar Usuario" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}