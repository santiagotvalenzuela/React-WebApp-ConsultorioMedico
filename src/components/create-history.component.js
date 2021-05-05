import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateHistory extends Component {
  constructor(props) {
    super(props);

    this.onChangeDniPaciente = this.onChangeDniPaciente.bind(this);
    this.onChangeObraSocial = this.onChangeObraSocial.bind(this);
    this.onChangeCarnet= this.onChangeCarnet.bind(this);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeApellido = this.onChangeApellido.bind(this);
    this.onChangeFechaNacimiento= this.onChangeFechaNacimiento.bind(this);
    this.onChangeDniMedico = this.onChangeDniMedico.bind(this);
    this.onChangeFecha= this.onChangeFecha.bind(this);
    this.onChangeMotivo = this.onChangeMotivo.bind(this);
    this.onChangeDiagnostico= this.onChangeDiagnostico.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dniPaciente: '',
      obraSocial: '',
      carnet: '',
      nombre: '',
      apellido: '',
      fechaNacimiento:new Date(),
      dniMedico: '',
      fecha: new Date(),
      motivo: '',
      diagnostico:'',
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

  onChangeObraSocial(e) {
    this.setState({
      obraSocial: e.target.value
    })
  }

  onChangeCarnet(e) {
    this.setState({
     carnet: e.target.value
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
  onChangeFechaNacimiento(date) {
    this.setState({
      fechaNacimiento: date
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

  

  onChangeFecha(date) {
    this.setState({
      fecha: date
    })
  }

  onChangeMotivo(e) {
    this.setState({
      motivo: e.target.value
    })
  }

  onChangeDiagnostico(e) {
    this.setState({
      diagnostico: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const historial = {
      dniPaciente: this.state.dniPaciente,
      obraSocial: this.state.obraSocial,
      carnet: this.state.carnet,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      fechaNacimiento: this.state.fechaNacimiento,
      dniMedico: this.state.dniMedico,
      fecha: this.state.fecha,
      motivo:this.state.motivo,
      diagnostico:this.state.diagnostico
      

    }

    console.log(historial);

    axios.post('http://localhost:5000/historial/add', historial)
      .then(res => console.log(res.data));

    window.location = '/historialList';
  }

// vamos con el form:
  render() {
    return (
    <div>
      <h3>Crear Historial</h3>
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
          <label>Obra Social: </label>
          <div>
           
              
              <input 
              type="text" 
              className="form-control"
              value={this.state.obraSocial}
              onChange={this.onChangeObraSocial}
              />
          </div>
        </div>

        <div className="form-group">
          <label>carnet: </label>
          <div>
           
              
              <input 
              type="text" 
              className="form-control"
              value={this.state.carnet}
              onChange={this.onChangeCarnet}
              />
          </div>
        </div>
        <div className="form-group">
          <label>Nombre: </label>
          <div>
           
              
              <input 
              type="text" 
              className="form-control"
              value={this.state.nombre}
              onChange={this.onChangeNombre}
              />
          </div>
        </div>
        <div className="form-group">
          <label>Apellido: </label>
          <div>
           
              
              <input 
              type="text" 
              className="form-control"
              value={this.state.apellido}
              onChange={this.onChangeApellido}
              />
          </div>
        </div>
        
        <div className="form-group">
          <label>Fecha Nacimiento: </label>
          <div>
            <DatePicker
              selected={this.state.fechaNacimiento}
              onChange={this.onChangeFechaNacimiento}
            />
          </div>
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
          <label>Fecha: </label>
          <div>
            <DatePicker
              selected={this.state.fecha}
              onChange={this.onChangeFecha}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Motivo: </label>
          <div>
           
              
              <input 
              type="text" 
              className="form-control"
              value={this.state.motivo}
              onChange={this.onChangeMotivo}
              />
          </div>
        </div>

        <div className="form-group">
          <label>Diagnostico: </label>
          <div>
            
              <input 
              type="text" 
              className="form-control"
              value={this.state.diagnostico}
              onChange={this.onChangeDiagnostico}
              />
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Crear historial" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}