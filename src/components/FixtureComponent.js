import React, { useState } from 'react'

import { withStyles } from '@material-ui/core/styles';
import { ExpandMore } from '@material-ui/icons';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { AccordionActions, Button, Divider } from '@material-ui/core';
import MaterialTable from 'material-table';

import fixtureService from '../services/FixtureService';



export default function FixtureComponent() {

  

  //TO-DO obtener parametro torneo seleccionado
  const initialFormState = { torneo: 1}
  
  const handleClick = (valor) => {
    setFechaSeleccionada(valor);
  }
 
  const [ data, setData ] = useState(initialFormState);

  const [fechaSeleccionada, setFechaSeleccionada]  = '';

  const columns =  [
    { field: 'id', id: 'ID' , width: 100 },
    { field: 'fecha', title: 'Fecha' , width: 200 },
    { field: 'equipo1', title: 'Equipo 1', width: 250  },
    { field: 'equipo2', title: 'Equipo 2', width: 100  },
    { field: 'golesequipo1' , title: 'Goles Equipo 1' , width: 100 },
    { field: 'golesequipo2' , title: 'Goles Equipo 2' , width: 100 },
    
  ]

  const resultados = [
    {id: '1', fecha: 'Fecha 1', equipo1: 'River', equipo2:'Racing', golesequipo1:1,golesequipo2:1},
    {id: '2', fecha: 'Fecha 1', equipo1: 'Estudiantes', equipo2:'Olimpo', golesequipo1:1,golesequipo2:1},
  ]


  return (
      <>
      
      <div className="App">

          
          <select id="fechas">
            <option value="fecha1">Fecha 1</option>
            <option value="fecha2">Fecha 2</option>
            <option value="fecha3">Fecha 3</option>
          </select>

          <MaterialTable  columns={columns} data={resultados} title="Resultados" editable="true"
            // other props
            
            actions={[
              {
                icon: 'edit',
                tooltip: 'Cargar Resultado',
                onClick: (event, rowData) => {
                  alert('Editar y guardar el resultado')
                }
              }
            ]}
          />

     
</div>

      </>
  )
}
