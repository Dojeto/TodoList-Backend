import {Router} from 'express'
import client from '../Models/connection.js'
const router = Router();

//GETALL TO LIST
router.get('/',async(req,resp)=>{
    try {
    const alltodos = await client.query(
        "SELECT * FROM todo",
        );
    resp.json(alltodos.rows)
    } catch (error) {
        console.log(error.message);
    }
})

export default router;