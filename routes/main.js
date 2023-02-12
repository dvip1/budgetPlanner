const express=require('express');
const router=express.Router();
const User=require('../models/index').User;
router.get('/',(req,res)=>{
    if(req.isAuthenticated()){
        res.render('main');
    }
    else res.redirect('/');
});
module.exports=router;