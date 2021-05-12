import React from 'react';
import { Link } from 'gatsby';
import Navegacion from './navegation';


const Header = () => {
    return (

        <header>
            <div>
                <Link>
                    Inicio
                </Link>

                <Navegacion />
            </div>
        </header>
    );
}

export default Header;