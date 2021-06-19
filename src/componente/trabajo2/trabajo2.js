import index from './inde.PNG';
import circulo from './circulo.PNG';
import cuadrado from './cuadrado.PNG';
import rectangulo from './rectangulo.PNG';
import triangulo from './triangulo.PNG';
import './trabajo2.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
function Proyectodos() {
  return (
 
	<body>
  <button><Link to="/"><p id="volver"><i class="fa fa-reply"></i>Volver</p></Link></button>
	<div className="caja">

<img src={index}  height="300px" id="principal" />
  <div className="primeraparte">
       <img src={circulo}  height="300px" />
       <img src={cuadrado}  height="300px" id="cuadrado" />
       
  </div>
   <div className="segundaparte">
       <img src={rectangulo}  height="300px" />
       <img src={triangulo}  height="300px" id="triangulo" />
       
  </div>
    
  	</div>
    
  </body>

    
    


  );
} 

export default Proyectodos;