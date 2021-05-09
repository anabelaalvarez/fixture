import axios from 'axios';


const REACT_APP_TORNEO_API_URL = 'http://localhost:8080';

class TorneoService{
    
    async createTorneo(name) {

      
      const body = {
        'nombre': name,
      }
      
      let axiosConfig = {
        headers: {
        "Content-Type": "application/json"
      },
          
      };
     
      return await axios.post( REACT_APP_TORNEO_API_URL+"/create", body, axiosConfig) 

        
    }

    async getTorneos() {

      return await axios.get(REACT_APP_TORNEO_API_URL+"/list");
        
    }

    
}
export default new TorneoService();