import './header.css';
import foto from './foto.jpg';

function Header(){

	return(
		<div className="carnet">
		

  	<img src={foto} alt="foto mafe" height="180px" />

  	<div className="texto1">
  	<h1>ACERCA DE MI</h1>
  	<p>Soy estudiante de Kuepa, desarrollador web Front-End.
  	Me considero una persona honesta, amigable, responsable, con buenas ideas creativas, 
  	trato de que el cilente y usuario se sientan comodos y agradables al diseño.</p>
  	</div>
	</div>
	)
};

 export default Header;  	