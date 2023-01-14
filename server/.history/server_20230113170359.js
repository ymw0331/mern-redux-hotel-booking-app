import express from 'express';
import { readD } from "fs";

const app = express();

//router middleware
readFileSync( './routes' ).map( ( r ) => app.use( '/api', require( `./routes/${ r }` ) ) ); //make all routes as middleware
// app.use( "/api", router );


const port = process.env.PORT || 8000;

app.listen( port, () =>
{
  console.log( `Server is running on port ${ port }` );
} );