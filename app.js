import express from 'express'
import cors from 'cors'
import add from './Routes/addList.js'
import update from './Routes/updateList.js'
import getall from './Routes/getallList.js'
import get from './Routes/getList.js'
import dlt from './Routes/deleteList.js'
import { config } from 'dotenv'
config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/add',add);
app.use('/',update);
app.use('/',get);
app.use('/getall',getall);
app.use('/',dlt);

app.listen(port,()=>{
    console.log(`Litening on port ${port}`);
})