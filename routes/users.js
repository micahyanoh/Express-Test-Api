import express from 'express';

 const router = express.Router();

 // all routes are starting with "/users"
 // this will be "/users/"
 router.get('/',(req,res)=>{
    res.send('These are the users');
 }); 

// make it availabe for use in other files
 export default router;