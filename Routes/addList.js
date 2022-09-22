import {Router} from 'express'
import client from '../Models/connection.js'
const router = Router();

//INSERT NEW LIST
router.post('/',async(req,resp)=>{
    try {
        const {desc}  = req.body;
        const newTodo = await client.query(
        "INSERT INTO todo (description) VALUES ($1) RETURNING * ",
        [desc]);
        resp.json(newTodo.rows);
    } catch (error) {
        console.log(error.message);
    }
})

export default router;