import {Router} from 'express'
import client from '../Models/connection.js'
const router = Router();

//UPDATE LIST
router.put('/update/:id',async(req,resp)=>{
    try {
        const {id} = req.params;
        const {desc} = req.body;
        const updateTodo = await client.query("UPDATE todo SET description= $1 WHERE todo_id=$2",[desc,id]);
        resp.json(updateTodo.rows);
    } catch (error) {
        console.log(error.message)
    }
})

export default router;