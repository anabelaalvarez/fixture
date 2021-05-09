import React, { useState } from 'react'

import fixtureService from '../services/FixtureService';
import { DataGrid } from '@material-ui/data-grid';

export default function PosicionesComponent() {


    const columns = [
        { field: 'id', headerName: 'id', width: 70 },
        { field: 'posicion', headerName: 'posicion', with:70},
        { field: 'equipo', headerName: 'Equipo', width: 130 },
        { field: 'puntos', headerName: 'Puntos', width: 70 },
      
      ];
      
      const rows = [
        { id:1, posicion: 1, equipo: 'River', puntos: 0 },
        { id:2, posicion: 2, equipo: 'Racing', puntos: 0 },
        { id:3, posicion: 3, equipo: 'Estudiantes', puntos: 0 },
      
      ];

  //TO-DO obtener parametro torneo seleccionado
  const initialFormState = { torneo: 1, posiciones: [] }
 
  const [ data, setData ] = useState(initialFormState);


  const loadPosiciones = (event) => {
      event.preventDefault();
      
      
      try {
      
        fixtureService.getPosiciones(data.torneo).then(
          (reponse) => {
            console.log("Response OK" +  JSON.stringify(reponse.data));
            //asigna nuevamente torneo + lista de posiciones 
            setData( reponse.data);
          },
          error => {
           
            console.log("Response ERROR" +  JSON.stringify(error));
            
          }
        );
  
  
      } catch (error) {
        console.log("Response ERROR" +  JSON.stringify(error));
      }

  }


  
  return (
      <>

        <title>Torneo: </title> {data.torneo}

        <h1>Posiciones</h1>

        <div style={{ height: 500, width: '40%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
        
       

      </>
  )
}
