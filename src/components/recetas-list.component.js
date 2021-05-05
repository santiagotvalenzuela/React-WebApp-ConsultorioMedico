import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Receta = props => (
  <tr>
    <td>{props.receta.dniPaciente}</td>
    <td>{props.receta.dniMedico}</td>
    <td>{props.receta.indicaciones}</td>
    <td>{props.receta.fecha.substring(0,10)}</td>
    <td>{props.receta.archivo.substring(0,60)}</td>
    <td>
      <Link to={"/download/"+props.receta._id}>download</Link> 
    </td>
  </tr>
)

export default class RecetasList extends Component {
  constructor(props) {
    super(props);

    this.onChangeDniParametro = this.onChangeDniParametro.bind(this);
    this.state = {
      dniParametro: '',
      receta: []
    }
    }
    onChangeDniParametro(e) {
      this.setState({
      dniParametro: e.target.value
    })

  }

  componentDidMount(dni) {
    axios.get('http://localhost:5000/recetas/get/'+dni)
      .then(response => {
        this.setState({ receta: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  recetaList() {
    return this.state.receta.map(currentreceta => {
      return <Receta receta={currentreceta} key={currentreceta._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Recetas cargadas</h3>
        <form onSubmit={this.onSubmit}>
      <div className="form-group">
          <label>DNI Del usuario a buscar: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.dniParametro}
              onChange={this.onChangeDniParametro}
              />
              {this.componentDidMount(this.state.dniParametro)}
              </div>
       </form>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Dni Paciente</th>
              <th>Dni Medico</th>
              <th>Indicaciones</th>
              <th>Fecha</th>
              <th>Archivo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            { this.recetaList() }
          </tbody>
        </table>
      </div>
    )
  }
}