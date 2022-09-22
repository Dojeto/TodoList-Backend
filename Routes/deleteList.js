import {Router} from 'express'
import client from '../Models/connection.js'
const router = Router();

//DELETE ID
router.delete('/delete/:id',async(res,resp)=>{
    try {
        const {id} = res.params;
        const DeleteByid = await client.query("DELETE FROM todo WHERE todo_id=$1 ",[id]);
        resp.json(DeleteByid.rows);
    } catch (error) {
        console.log(error.message);
    }
})

export default router;