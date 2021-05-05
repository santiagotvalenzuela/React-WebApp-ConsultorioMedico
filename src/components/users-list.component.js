import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.dni}</td>
    <td>{"********"}</td>
    <td>{props.user.nombre}</td>
    <td>{props.user.apellido}</td>
    <td>{props.user.rol}</td>
    <td>{props.user.mail}</td>
    <td>{props.user.telefono}</td>
    <td>{props.user.fecNac.substring(0,10)}</td>
    <td>{props.user.estado}</td>
    <td>
      <Link to={"/editUser/"+props.user._id}>editar</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>eliminar</a>
    </td>
  </tr>
)

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this)

    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      turnos: this.state.users.filter(el => el._id !== id)
    })
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Usuarios registrados</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Dni</th>
              <th>Password</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Rol</th>
              <th>Mail</th>
              <th>Telefono</th>
              <th>Nacimiento</th>
              <th>Estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            { this.userList() }
          </tbody>
        </table>
      </div>
    )
  }
}