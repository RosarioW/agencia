import React from 'react';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container">
            <p className="float-right"><a href="#">Subir</a></p>
            <p>&copy; {(new Date().getFullYear())} Mi Proyecto, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
            <Link>
                <img src={logo.publicURL} alt="Agencia Los Navegantes" />
            </Link>
        </footer>
 
    )
    
  }
 
}
 
export default Footer;