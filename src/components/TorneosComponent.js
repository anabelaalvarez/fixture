import React, { useState } from 'react';

import PosicionesComponent from './PosicionesComponent';
import FixtureComponent from './FixtureComponent';
import App from '../css/App.css';


export default function TorneosComponent() {

  
  const [clickPosiciones, setClickPosiciones] = useState(true);

  const handleClick = () => setClickPosiciones(!clickPosiciones);

  const labelbuttonVerFixture = 'Ver Fixture';
  const labelbuttonVerPosiciones = 'Ver tabla de posiciones';

  const labelFixture = 'Fixture';
  const labelPosiciones = 'Posiciones';

  return (
      <>

       <p>   </p>
      

       
       
      
  <div>

<div className='Rectangul_top'>
  <div id='hijo'> {clickPosiciones ? labelPosiciones : labelFixture }</div>
  <div id='hijo'> {clickPosiciones ? ''  : <button> Crear Torneo</button> } </div>
</div>

<div className='content'>
<button onClick={handleClick}> {clickPosiciones ? labelbuttonVerFixture : labelbuttonVerPosiciones } </button>
    <br/> 
    <br/>
    {clickPosiciones ? <PosicionesComponent/> : <FixtureComponent/>} 
   
      
</div>



</div>

      </>
   )
}
  
