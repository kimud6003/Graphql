import app from './App';
import { Options } from 'graphql-yoga';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT : string = " /playground";
const GRAPHQL_ENDPOINT : string = "/graphql";

const appOptions : Options ={
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint:GRAPHQL_ENDPOINT
};

const handleAppState = () => console.log(`Listening on prot ${PORT}`); 
app.start(appOptions,handleAppState);