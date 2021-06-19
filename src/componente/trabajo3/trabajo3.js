import inicio from './inico1.PNG';
import hojapri from './hojapri.PNG';
import cartas from './cartas.PNG';
import comoesmisigno from './comoesmisigno.PNG';
import quesignoeres from './quesignoeres.PNG';
import estaremosjuntos from './estaremosjuntos.PNG';
import './trabajo3.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
function Proyectotres() {
  return (
 
	<body>
  <button><Link to="/"><p id="volver"><i class="fa fa-reply"></i>Volver</p></Link></button>
	<div className="seispaginaszodiaco">

      <img src={hojapri}  height="300px" id="bienvenidos"  />

      <img src={inicio}  height="300px" />
      <img src={quesignoeres}  height="300px"  />
       
      <img src={cartas}  height="300px" />
      <img src={comoesmisigno}  height="300px"  />

      <img src={estaremosjuntos}  height="300px" />
       
    
  	</div>
    
  </body>

    
    


  );
} 

export default Proyectotres;