import React from 'react';
 
class Menu extends React.Component {
 
  render() {
 
  	return (
 
  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
 
		    <a className="navbar-brand" href="#">Agencia Los Navegantes</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">
			        <li className="nav-item active">
			          	<a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="#">Tripulación</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="#">Desarrollo Web</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="#">Marketing Digital</a>
			        </li>
					<li className="nav-item">
			          	<a className="nav-link" href="#">Analítica y performance</a>
			        </li>
					<li className="nav-item">
			          	<a className="nav-link" href="#">Blog</a>
			        </li>
					<li className="nav-item">
			          	<a className="nav-link" href="#">Contacto</a>
			        </li>
			    </ul>			    
		    </div>
 
		</nav>
 
  	)
    
  }
 
}
 
export default Menu;