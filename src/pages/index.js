import React from 'react';
import Layout from '../components/layout'
import useStart from '../hooks/useStart';

const Index= () => {

    const start = useStart();

    console.log(start);


    return (
        <Layout>
            <h1>Agencia Los Navegantes</h1>       
        </Layout>
    );
}

export default Index; 