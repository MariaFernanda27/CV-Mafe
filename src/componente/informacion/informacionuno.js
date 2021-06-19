import './informacionuno.css';
import html from './html-5.png';
import css from './css-3.png';
import js from './javascript.png';
import figma from './figmalogo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

function Informacion(){

	return(
	<body>

<div className="todo">

<section id="seccion1">

<div className="datos">
   <div id="tituloencabezado"><h2>DATOS PERSONALES</h2><i class="fa fa-times-circle"></i></div>
   
    <div className="nombre"><span className="nombre">Nombre:</span>Maria Fernanda Garcia Avila</div>
	<div className="edad"><span className="edad">Edad:</span>17 años</div>
	<div className="ciudad"><span className="ciudad">Ciudad:</span>Bogota d,c</div>
	<div className="numero"><span className="numero">Numero:</span>+57 320 365 1291</div>
	<div className="email"><span className="email">Email:</span>fg602984@gmail.com</div>
	<div className="github"><span className="email">Git Hub:</span>MariaFernanda27</div>
   </div>

  	<div className="texto2">

<p>Mis objetivos principales es poner a prueba todo mi conocimiento y mis habilidades en proyectos, 
asi mismo superar los retos. Tambien esta el objetivo de crecer y aprender mas en esta area.</p>
  	</div>

    
  	<h2 className="habilidades">HABILIDADES</h2>

  	<div className="programahtml">
  	<img src={html} height="80px" />
  	<div className="info2"><progress max="100" value="95"> </progress></div>
  	</div>

  	<div className="programahtml">
  	<img src={css}  height="80px" />
  	<div className="info2"><progress max="100" value="80"></progress></div>
  	</div>

  	<div className="programahtml">
  	<img src={js}  height="80px" />
  	<div className="info2"><progress max="100" value="75"> </progress></div>
  	</div>

  	<div className="programahtml">

  	<img src={figma}  height="80px" id="figma" />
  	<div className="info2"><progress max="100" value="80"> </progress></div>
  	</div>
  	

</section>

   <section id="seccion2">
    
<div className="texto3">
  	<h2>PORTAFOLIO</h2>

    <ul>
    <li className="item">
    <Link to="/proyecto1"><p id="trabajos">Trabajo1</p></Link>
    </li>
    <li className="item">
    <Link to="/proyecto2"><p id="trabajos">Trabajo2</p></Link>
    </li>
    <li className="item">
    <Link to="/proyecto3"><p id="trabajos">Trabajo3</p></Link>
    </li>
    <li className="item">
    <Link to="/proyecto4"><p id="trabajos">Trabajo4</p></Link>
    </li>
     <li className="item">
    <Link to="/proyecto5"><p id="trabajos">Trabajo5</p></Link>
    </li>
    
    </ul>
  	</div>

   <div className="estudio">
   <h2>EDUCACION</h2>
   <div className="subtitulo"><i class="fa fa-graduation-cap"></i><h5>2020 Bachiller</h5></div>
<div className="parrafos"><p>Hice mi primaria al igual que mi bachiller en el 
colegio Alianza Educativa Miravalle.</p></div>

<div className="subtitulo"><i class="fa fa-graduation-cap"></i><h5>2020 Tecnico en venta de productos y servicios (vps)</h5></div>
<div className="parrafos"><p>Curse el tecnico de ventas de productos y 
servicios en el Sena entre los años 2019-2020.</p></div>

<div className="subtitulo"><i class="fa fa-graduation-cap"></i><h5>2019 Curso de ingles</h5></div>
<div className="parrafos"><p>Realice un curso de ingles de un año en American System International.</p></div>

<div className="subtitulo"><i class="fa fa-pencil-square"></i><h5>2020-Tecnico en pocesamiento y digitacion de datos</h5></div>
<div className="parrafos"><p>Estoy cursando un programa tecnico laboral en porcesamiento y digitacion de datos con enfoque en Desarrollo Web Front End en Kuepa Edu Tech.</p></div>
   </div>

   <div className="idiomas">
   <div className="español">Español:<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></div>
   <div className="ingles">Ingles:<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div>
   </div>

   <div className="aficiones">
   <h2>AFICIONES</h2>
   <div className="bailar"><i class="fa fa-female"></i>Bailar.</div>
   <div className="dibujar"><i class="fa fa-pencil"></i>Dibujar.</div>
   <div className="musica"><i class="fa fa-headphones"></i>Escuchar Musica.</div>
   <div className="documentales"><i class="fa fa-television"></i>Ver Docmentales.</div>
   <div className="ejercicio"><i class="fa fa-child"></i>Ejercicio (saltar cuerda).</div>

   </div>


</section>
</div>
	</body>

	)
};

 export default Informacion;

