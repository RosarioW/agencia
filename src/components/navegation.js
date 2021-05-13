import React from 'react';
import { Link } from 'gatsby';
import  Styled from '@emotion/styled';


const Nav = Styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        padding: 0;
        felx-direction: row;
    }
`;

const NavLink = Styled(Link)`
    color: #fff;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: .5rem;
    margin-right: 1rem;
    &:last-of-type {
        margin-right: 0;
    }
`;

const Navegacion = () => {
    return ( 
        <Nav>
            <NavLink
                to={'/'}
                activeClassName="pagina-actual"    
            >Inicio</NavLink>
            <NavLink
                to={'/tripulacion'}
                activeClassName="pagina-actual"
            >Tripulación</NavLink>
            <NavLink
                to={'/webdevelopment'}
                activeClassName="pagina-actual"
            >Desarrollo Web</NavLink>
            <NavLink
                to={'/dmarketing'}
                activeClassName="pagina-actual"
            >Marketing Digital</NavLink>
            <NavLink
                to={'/analytics'}
                activeClassName="pagina-actual"
            >Analítica & Performance</NavLink>
            <NavLink
                to={'/blog'}
                activeClassName="pagina-actual"
            >Blog</NavLink>
            <NavLink
                to={'/contact'}
                activeClassName="pagina-actual"
            >Contacto</NavLink>
        </Nav>
    );
}

export default Navegacion;
    