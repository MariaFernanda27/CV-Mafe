import prysdejercicios from './prysdejercicios.PNG';
import trycrejercicios from './trycrdejercicios.PNG';
import './trabajo5.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
function Proyectocinco() {
  return (
 
	<body>
  <button><Link to="/"><p id="volver"><i class="fa fa-reply"></i>Volver</p></Link></button>
	<div className="cuatroejercicios">

<img src={prysdejercicios}  height="300px" />
  
<img src={trycrejercicios}  height="292px" />
  
    
  	</div>
    
  </body>

    
    


  );
} 

export default Proyectocinco;