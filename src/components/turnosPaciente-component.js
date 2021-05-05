import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Turno = props => (
  <tr>
    <td>{props.turno.dniPaciente}</td>
    <td>{props.turno.dniMedico}</td>
    <td>{props.turno.especialidad}</td>
    <td>{props.turno.fecha.substring(0,10)}</td>
    <td>{props.turno.fecha.substring(11,16)}</td>
    
  </tr>
)

export default class TurnosPaciente extends Component {
  constructor(props) {
    super(props);

    this.onChangeDniParametro = this.onChangeDniParametro.bind(this);
    this.state = {
      dniParametro: '',
      turno: []
    }
    }
    onChangeDniParametro(e) {
      this.setState({
      dniParametro: e.target.value
    })

    this.deleteTurno = this.deleteTurno.bind(this)

  }

  componentDidMount(dni) {
    axios.get('http://localhost:5000/turnos/get/'+dni)
      .then(response => {
        this.setState({ turno: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  turnoList() {
    return this.state.turno.map(currentturno => {
      return <Turno turno={currentturno}  key={currentturno._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Turnos agendados</h3>
        <form onSubmit={this.onSubmit}>
      <div className="form-group">
          <label>DNI Del usuario a buscar: </label>
          <input 
              type="text" 
              className="form-control"
              value={localStorage.getItem("dni")}
              />
              {this.componentDidMount(localStorage.getItem("dni"))}
              </div>
       </form>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Dni Paciente</th>
              <th>Dni Medico</th>
              <th>Especialidad</th>
              <th>Fecha</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            { this.turnoList() }
          </tbody>
        </table>
      </div>
    )
  }
}