import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import useNosotros from '../hooks/useNosotros'
import PropiedadPreview from './propiedadPreview';
import NosotrosCSS from '../css/nosotros.module.css';
import useFiltro from '../hooks/useFiltro';

const Nosotros = () => {

    const resultado = useNosotros();
    const [propiedades] = useState(resultado);
    const [ filtradas, guardarFiltradas] = useState([]);
    // filtrado de propiedades
    const { categoria,  FiltroUI } = useFiltro();

    useEffect(() => {
        if(categoria) {
            const filtro = propiedades.filter( propiedad => propiedad.categoria.nombre === categoria);
            guardarFiltradas(filtro);
        } else {
            guardarFiltradas(propiedades);
        }
    }, [categoria])

    // console.log(propiedades)

    return ( 
        <>
            <h2 css={css`
                margin-top: 5rem;
            `}>Nosotros</h2>

            {FiltroUI() }

            <ul className={NosotrosCSS.propiedades}>
                { filtradas.map( propiedad => (
                    <PropiedadPreview 
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default Nosotros;