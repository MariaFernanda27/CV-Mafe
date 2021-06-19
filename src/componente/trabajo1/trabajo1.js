import index from './index.PNG';
import quienessomos from './quienessomos.PNG';
import productos from './productos.PNG';
import servicios from './servicios.PNG';
import contacto from './contacto.PNG';
import './trabajo1.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
function Seccionuno() {
  return (
 
	<body>
  <button><Link to="/"><p id="volver"><i class="fa fa-reply"></i>Volver</p></Link></button>
	<div className="caja">

  <div className="unapaginas">
       <img src={index}  height="300px" />
       <img src={servicios}  height="300px" id="servicios" />
       
  </div>
  
  <div className="dospagina">    
       <img src={productos}  height="300px" />
       <img src={contacto}  height="300px" id="contacto" />
       <img src={quienessomos}  height="300px" id="quienessomos"/>
  </div>
  

    
    
  	</div>
    
  </body>

    
    


  );
} 

export default Seccionuno;