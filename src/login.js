import React from 'react';
import {Grid, TextField, Button, InputAdornment,Select} from '@material-ui/core';
import { AccountCircle, LinkTwoTone, LockRounded} from '@material-ui/icons';
//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
//import FormHelperText from '@material-ui/core/FormHelperText';
//import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import { Component } from 'react';


  export default class Login extends Component {
   
    constructor(props) {
      super(props);
  
      this.onChangeUserDni = this.onChangeUserDni.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
  
      this.state = {
        dni: '',
        password: '',
        error:false,
        errorMsg:""

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

    eventoLogin=()=> {
      const user = {
        dni: this.state.dni,
        password: this.state.password
      }
       axios.post('http://localhost:5000/users/Login', user)
        .then(res =>{
         (console.log(res.data));
         localStorage.setItem("token",res.data.token);
         localStorage.setItem("rol",res.data.user.rol);
         localStorage.setItem("dni",res.data.user.dni);
         if(res.data.user.rol==4){
          window.location.replace("./turnosPaciente");   
         }
         else{
         window.location.replace("./turnos");}
        }).catch(error=>{
          console.log(error);
          this.setState({
            error:true,
            errorMsg:"Usuario/Contraseña incorrectos"
          })
        })

     //console.log(user);

      this.setState({
        dni: ''
      })
    }
    
  
render(){
  return (
        <div>
          <Grid container style={{minHeight: '100vh'}}>

            <Grid items xs={12} sm={6}>
              <img src="/images/Intranet.jpg" 
              style={{width:'100%', height: '100%', objectFit:'Cover'}} 
              alt="brand" />

            </Grid>
            <Grid container item xs={12} sm={6} 
            alignItems="center" 
            direction="column"
            justify="space-between" 
            style={{padding: 10, background: "white"}}>
              <div/>
              <div style={{display:'flex', flexDirection:"column", maxWidth:400, minWidth:300}}>                
                  <Grid container justify="center">
                    <img src="/images/LogoCentro.png" width={200} alt="logo" />
                  </Grid>
                  <div style={{height:20}}/>
                  <TextField
                   label="Usuario"
                   margin="normal" 
                   type="dni"
                   input={this.state.dni}
                   onChange={this.onChangeUserDni}
                   InputProps={{startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>}}/>
                  <TextField
                   label="Contraseña" 
                   margin="normal" 
                   type="password"
                   input={this.state.password}
                   onChange={this.onChangePassword}
                   InputProps={{startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment>}}/>
                  <div style={{height:20}}/>
                  
                  
                  <div style={{height:20}} />
                 < Button color="primary" variant="contained" onClick={this.eventoLogin}           
                 >
                    Iniciar Sesión 
                    
                  </Button>
                  <br></br>
                  {this.state.error ===true &&
                    <div className="alert alert-warning" role="alert">
                      {this.state.errorMsg}
                    </div>
                  } 

            <Link to ="/RegistrarPaciente">
          
          <Button
            type="Registrarse"
            fullWidth
            variant="contained"
            color="secondary"
          >
            Registrarse
          </Button>
          </Link>
                  <div style={{height:20}} />
                 
                  
                </div>  
              <div />            
            </Grid>
           
          </Grid>

        </div>

  );

}
  }

