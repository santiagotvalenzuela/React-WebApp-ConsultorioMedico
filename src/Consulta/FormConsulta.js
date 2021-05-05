
import React from 'react';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import './FormConsulta.css';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


export default function Consulta() {

  return (
        <form >
          <div>
          <h1> Contacto</h1>
          
          <Grid container justify="center" className="contenedor">
            <Grid item xs={10}> 
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Nombre"
                label="Nombre"
                name="Nombre"
                autoComplete="Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Apellido"
                label="Apellido"
                name="Apellido"
                autoComplete="Apellido"
                autoFocus
            />
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Documento"
                label="Documento"
                type="Documento"
                id="Documento"
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Celular"
                label="Celular"
                type="Celular"
                id="Celular"
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Consulta"
                label="Consulta"
                type="Consulta"
                id="Consulta"
              />
            </Grid>  
            <Grid item xs={10}>
              <Button
                type="EnviarConsulta"
                fullWidth
                variant="contained"
                color="primary"
              >
                Enviar Consulta
              </Button>
            </Grid>  
          </Grid>
        
          <Grid container>
            <Grid item xs>
              
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                
              </Link>
            </Grid>
          </Grid>
      </div>
    </form>
        
      
  );
}