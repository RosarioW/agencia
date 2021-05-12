import React from 'react';
import { Link } from 'gatsby';


const Navegacion = () => {
    return ( 
        <nav>
            <Link
                to={'/'}            
            >Inicio</Link>
            <Link
                to={'/tripulacion'}
            >Tripulación</Link>
            <Link
                to={'/webdevelopment'}
            >Desarrollo Web</Link>
            <Link
                to={'/dmarketing'}
            >Marketing Digital</Link>
            <Link
                to={'/analytics'}
            >Analítica & Performance</Link>
            <Link
                to={'/blog'}
            >Blog</Link>
            <Link
                to={'/contact'}
            >Contacto</Link>
        </nav>
    );
}

export default Navegacion;
    