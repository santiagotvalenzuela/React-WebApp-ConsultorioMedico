import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from 'date-fns';

export default class CreateTurno extends Component {
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
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.dni),
            dni: response.data[0].dni
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
      fecha: this.state.fecha
    }

    console.log(turno);

    axios.post('http://localhost:5000/turnos/add', turno)
      .then(res => console.log(res.data));

    window.location = '/turnos';
  }
  

  render() {
    return (
    <div>
      <h3>Sacar un nuevo turno</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>DNI Paciente: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.dniPaciente}
              onChange={this.onChangeDniPaciente}
              />
        </div>
        <div className="form-group"> 
          <label>DNI Medico: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.dniMedico}
              onChange={this.onChangeDniMedico}
              />
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
              showTimeSelect
              minDate={new Date()}
              maxDate={addMonths (new Date(),2)} //valido que solo te deje sacar turno dentro de los 2 meses proximos
              showDisabledMonthNavigation
              dateFormat="MMMM d, yyyy h:mm aa"
              filterDate={d=>d.getDay() !== 6 && d.getDay() !== 0}  
            />
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Sacar un turno" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}