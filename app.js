// Importar Express.js const express = require ( 'express' );


// Crea una aplicación Express const app = express ();


// Middleware para analizar cuerpos JSON 
app.use ( express.json ( ) ) ;

// Establecer el puerto y verificar_token const port = process.env.PORT || 3000 ; const verifyToken = process.env.VERIFY_TOKEN ;​​​
 


// Ruta para solicitudes GET app.get 
( ' /' , ( req , res ) = > { const { ' hub.mode' : mode , ' hub.challenge ' : challenge , 'hub.verify_token' : token } = req.query ;   
       

  si ( modo === 'suscribirse' && token === verifyToken ) { 
    console.log ( 'WEBHOOK VERIFICADO' ) ; res.status (200) .send ( desafío ) 
    ; } de lo contrario { res.status ( 
    403 ) .end ( ) ; } } ) ;    
    
  


// Ruta para solicitudes POST app.post 
( ' /' , ( req , res ) => { const timestamp = new Date ( ). toISOString (). replace ( ' T' , ' ' ) .slice ( 0,19 ); console.log 
  ( ` \ n \n Webhook recibido $ { timestamp } \n` ); console.log 
  ( JSON.stringify ( req.body , null , 2 ) ) ; res.status 
  ( 200 ) .end ( ) ; } ) ;   
        


// Inicia la 
aplicación del servidor . listen ( puerto , () => { 
  console . log (` \n Escuchando en el puerto $ { puerto } \n `); });   
