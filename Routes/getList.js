import {Router} from 'express'
import client from '../Models/connection.js'
const router = Router();

//GET LIST BY ID
router.get('/get/:id',async(req,resp)=>{
    try {
        const {id} = req.params;
        const getbyid = await client.query("SELECT * FROM todo WHERE todo_id =($1)",[id]);
        resp.json(getbyid.rows);
    } catch (error) {
        console.log(error.message)
    }
})

export default router;