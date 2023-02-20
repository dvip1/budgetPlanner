const express=require('express');
const router= express.Router();
router.get('/',(req, res)=>{
    if(req.isAuthenticated())res.redirect('/main');
    else
    res.render('home');
})
module.exports= router;