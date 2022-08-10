
import '../css/componentes.css';


export const saludar = ( nombre ) => {  //para exportar un modulo se debe primero poner export.
    console.log('Creando etiqueta h1');
   
    const h1 = document.createElement ('h1');
    h1.innerText = `Hola, ${ nombre }`;
    document.body.append( h1 );
   
    //img
    // console.log(webpacklogo);
    // const img = document.createElement('img');
    // img.src= webpacklogo;
    // document.body.append( img );

   }

