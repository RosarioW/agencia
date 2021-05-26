/*import { graphql, useStaticQuery } from 'gatsby';

const useStart = () => {
    
    const result = useStaticQuery(
        graphql`
            query{
                allStrapiPaginas(filter: { nombre: { eq: "Tripulación"}}){
                    nodes {
                        id
                    nombre
                    contenido
                    img {
                            publicURL
                    }
                }
                }  
            }
        `
    );

    console.log(result);
}

export default useStart;*/