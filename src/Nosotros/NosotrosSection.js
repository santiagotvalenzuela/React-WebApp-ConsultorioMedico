import React from 'react';
import './NosotrosSection.css'
import Grid from '@material-ui/core/Grid';

export default function Nosotros() {
    return(
        <div>
            <br></br>
            <h1>Nosotros</h1>
            <br></br>
            <Grid container justify="center" className="contenedor">
                <Grid item xs={10}>
                    <h2>Objetivo:</h2>
                    <br></br>
                    <p>Mejorar la calidad de vida de las personas brindando
                    atención  clínica y quirúrgica con el mejor nivel de  asistencia médica.</p>
                    <br></br>
                </Grid>
                <Grid item xs={10}>
                    <h2>Misión:</h2>
                    <br></br>
                    <p>
                    Generamos un espacio de actuación médica para todos aquellos médicos 
                    especializados en la  por medio de la consulta <p> médica y de la cirugía.</p>
                    </p>
                    <br></br>
                </Grid>
                <Grid item xs={10}>
                    <h2>Visión:</h2>
                    <br></br>
                    <p>
                    Ser un centro referencial de la  argentina,  para pacientes, profesionales e 
                    instituciones médicas de la comunidad, a través <p> de las contribuciones en la práctica médica, la investigación y la aplicación de la tecnológica al servicio de la  salud.</p>
                    </p> 
                </Grid>
            </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
        

    );
}