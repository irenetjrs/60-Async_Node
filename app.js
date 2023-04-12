import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const PORT = 3000;

const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Wellcome</h1>');
})


app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}`);
})

if(process.env.NODE_ENV == 'development') {
    console.log('development mode');
    } else {
    console.log('production mode');
    }