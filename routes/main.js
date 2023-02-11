const express=require('express');
const router=express.Router();
const User=require('../models/index').User;
router.get('/',(req,res)=>{
    res.render('main');
});
module.exports=router;