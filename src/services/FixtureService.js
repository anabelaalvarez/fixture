import axios from 'axios';


const REACT_APP_FIXTURE_API_URL = 'http://localhost:8080';

class FixtureService{
    
    //guarda el resultado de un partido
    async addResultado(partido) {

      
      const body = {
        'idpartido': partido.idpartido,
        'equipo1goles': partido.equipo1goles,
        'equipo2goles': partido.equipo2goles,
      }
      
      let axiosConfig = {
        headers: {
        "Content-Type": "application/json"
      },
          
      };
     
      return await axios.post( REACT_APP_FIXTURE_API_URL+"/addResultado", body, axiosConfig) 

        
    }

    //llama al servicio torneos para obtener las posiciones del torneo que se pasa como parametro
    async getPosiciones(torneo) {

      return await axios.get(REACT_APP_FIXTURE_API_URL+"/getPosiciones", { params: { answer: torneo } });
        
    }

    
}
export default new FixtureService();