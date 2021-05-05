import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditTurno extends Component {
  constructor(props) {
    super(props);

  this.onChangeDniPaciente = this.onChangeDniPaciente.bind(this);
    this.onChangeDniMedico = this.onChangeDniMedico.bind(this);
    this.onChangeEspecialidad = this.onChangeEspecialidad.bind(this);
    this.onChangeFecha = this.onChangeFecha.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dniPaciente: '',
      dniMedico: '',
      especialidad: '',
      fecha: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/turnos/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          dniPaciente: response.data.dniPaciente,
          dniMedico: response.data.dniMedico,
          especialidad: response.data.especialidad,
          fecha: new Date(response.data.fecha)
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

  onChangeDniPaciente(e) {
    this.setState({
      dniPaciente: e.target.value
    })
  }

  onChangeDniMedico(e) {
    this.setState({
      dniMedico: e.target.value
    })
  }

  onChangeEspecialidad(e) {
    this.setState({
      especialidad: e.target.value
    })
  }

  onChangeFecha(date) {
    this.setState({
      fecha: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const turno = {
      dniPaciente: this.state.dniPaciente,
      dniMedico: this.state.dniMedico,
      especialidad: this.state.especialidad,
      fecha: this.state.fecha,
    }

    console.log(turno);

    axios.post('http://localhost:5000/turnos/update/' + this.props.match.params.id, turno)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Cambiar fecha del turno</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Dni Paciente: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.dniPaciente}
              onChange={this.onChangeDniPaciente}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>DNI Medico: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.dniMedico}
              onChange={this.onChangeDniMedico}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>Especialidad: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.especialidad}
              onChange={this.onChangeEspecialidad}
              />
        </div>
        <div className="form-group">
          <label>Fecha: </label>
          <div>
            <DatePicker
              selected={this.state.fecha}
              onChange={this.onChangeFecha}
            />
          </div>
        </div>
        
        <div className="form-group">
          <input type="submit" value="Editar fecha Turno" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}