import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Historial = props => (
  <tr>
    
    <td>{props.historial.dniPaciente}</td>
    <td>{props.historial.obraSocial}</td>
    <td>{props.historial.carnet}</td>
    <td>{props.historial.fechaCreacion.substring(0,10)}</td>
    <td>{props.historial.nombre}</td>
    <td>{props.historial.apellido}</td>
    <td>{props.historial.fechaNacimiento.substring(0,10)}</td>
    <td>{props.historial.dniMedico}</td>
    <td>{props.historial.fecha.substring(0,10)}</td>
    <td>{props.historial.motivo}</td>
    <td>{props.historial.diagnostico}</td>
    
  </tr>
)

export default class historialList extends Component {
  constructor(props) {
    super(props);  

      this.onChangeDniParametro = this.onChangeDniParametro.bind(this);
      this.state = {
        dniParametro: '',
        historial: []
      }
  }
  onChangeDniParametro(e) {
    this.setState({
      dniParametro: e.target.value
    })
  }

  
  componentDidMount(dni) {
    axios.get('http://localhost:5000/historial/get/'+dni)
    
      .then(response => {
        this.setState({ historial: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
      console.log(this.state.dniParametro);
    console.log(this.onChangeDniParametro);
  }



 historialList() {
    return this.state.historial.map(currenthistorial => {
      return <Historial historial={currenthistorial}  key={currenthistorial._id} />;
    })
  }


 
  render() {
    return (
      <div>
        <h3>historial agendado</h3>
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
              <div className="form-group">
           
          </div>
       </form>
         
        <table className="table">
          <thead className="thead-light">
            <tr>   
              <th>Dni Paciente</th>
              <th>Obra social</th>
              <th>Carnet</th>
              <th>fecha creacion</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha de nacimiento</th>
              <th>Dni Medico</th>
              <th>Fecha</th>
              <th>Motivo</th>
              <th>Diagnostico</th>
            </tr>
          </thead>
          <tbody>
            { this.historialList() }
          </tbody>
        </table>
      </div>
    )
  }
}