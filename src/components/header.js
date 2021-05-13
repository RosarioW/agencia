import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navegacion from './navegation';
import { css } from '@emotion/react';

const Header = () => {

    // consultar el sector1.png

    const { logo } =  useStaticQuery( graphql `
        query {
            logo: file(relativePath: {eq: "sector1.png"}){
                publicURL
            }
        }
    `);
     //console.log(logo);



    return (

        <header
            css={css`
                background-color: #0100ff;
                padding: 1.5rem 3rem;
                `}          
        >

            <div
                 css={css`
                    max-width: 120rem;
                    margin: 0 auto;
                    text-align: center; 

                    @media (min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }                 
                `}           
            >
                <Link>
                <img src={logo.publicURL} alt="Agencia Los Navegantes" />
                </Link>

                <Navegacion />
            </div>
        </header>
    );
}

export default Header;