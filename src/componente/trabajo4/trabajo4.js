import ejercicio1 from './ejercicio1.PNG';
import ejercicio2 from './ejercicio2.PNG';
import ejercicio3 from './ejercicio3.PNG';
import ejercicio4 from './ejercicio4.PNG';
import ejercicio5 from './ejercicio5.PNG';
import './trabajo4.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
function Proyectocuatro() {
  return (
 
	<body>
  <button><Link to="/"><p id="volver"><i class="fa fa-reply"></i>Volver</p></Link></button>
	<div className="loscincoejercicios"> 


       <img src={ejercicio1}  height="300px" id="ejercicio1" />
  
       <img src={ejercicio2}  height="300px" />
   
       <img src={ejercicio3}  height="300px"  />
       
  
  
       <img src={ejercicio4}  height="300px" />
       <img src={ejercicio5}  height="300px" />
       
 
    
  	</div>
    
  </body>

    
    


  );
} 

export default Proyectocuatro;