import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateReceta extends Component {
  constructor(props) {
    super(props);

    this.onChangeDniPaciente = this.onChangeDniPaciente.bind(this);
    this.onChangeDniMedico = this.onChangeDniMedico.bind(this);
    this.onChangeIndicaciones = this.onChangeIndicaciones.bind(this);
    this.onChangeArchivo = this.onChangeArchivo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dniPaciente: '',
      dniMedico: '',
      indicaciones: '',
      archivo: '',
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
  
  onChangeIndicaciones(e) {
    this.setState({
      indicaciones: e.target.value
    })
  }
  onChangeArchivo(e) {
    this.setState({
      archivo: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const receta = {
      dniPaciente: this.state.dniPaciente,
      dniMedico: this.state.dniMedico,
      indicaciones: this.state.indicaciones,
      archivo: this.state.archivo
    }

    console.log(receta);

    axios.post('http://localhost:5000/recetas/add', receta)
      .then(res => console.log(res.data));

    window.location = '/recetas';
  }
  

  render() {
    return (
    <div>
      <h3>Cargar una nueva receta</h3>
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
          <label>Indicaciones: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.indicaciones}
              onChange={this.onChangeIndicaciones}
              />
        </div>
        <div className="form-group">
          <label>Archivo: </label>
          <input 
              type="file"
              value={this.state.archivo}
              onChange={this.onChangeArchivo}
              />
        </div>      
        <div className="form-group">
          <input type="submit" value="Cargar receta" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}