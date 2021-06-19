
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

function Nav() {
  return (
    <div>
  	<nav>

  	<ul className="menu">

     <li className="item">
    <Link to="/proyecto1">Trabajo</Link>
    </li>

    </ul>
  
  	</nav>
    </div>
  );
} 

export default Nav;