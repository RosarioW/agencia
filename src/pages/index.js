import React from 'react';
import Layout from '../components/layout';
//import useStart from '../hooks/useStart';
import logoTri from '../img/tripulaciontotal.png';
const Index= () => {

   /* const start = useStart();

    console.log(start);*/


    return (
        <Layout>
            <h1>Navegantes de Medios Digitales</h1>
<p>check
Impulsamos tus ventas en menos de 30 días.
check
Maximizamos tu facturación en menos de 90 días.
check
Escalamos tus resultados en el plazo de 180 días.
check
Convertimos el 2021 en tu mejor año.
Somos una agencia de 7 cifras (USD) que trabaja con más de 50 marcas de eCommerce con facturaciones anuales de 8, 7 y 6 cifras.
¿Llevemos tus resultados al próximo nivel?</p>
<button>Conócenos</button>
        <div className="sectionInicio">
            <div>
            <img src={logoTri} className="img-fluid mt-2 logotri" alt="Responsiveimg" />
            </div>        
        </div>
      </Layout>
    );
    
}

export default Index; 

