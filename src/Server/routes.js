const express = require('express');
const router = express.Router();
const  ItemsModel = require('./Modules/Products');
/*
const multer = require("multer");

const  storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../components/covers/");
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
});
const upload = multer({storage:storage});
 */

router.post('/addItems',async(req , res)=>{
//app.post('/',async(req , res)=>{
    const item = new ItemsModel({

        title:req.body.title,
        about:req.body.about,
        booktype:req.body.booktype,
        date:req.body.date,
        price:req.body.price

    });

    await item.save().then(data =>{
        res.send("Save to database");
        res.json(data)
        alert("Saved")
    }).catch( err=>{
        res.status(400).send("unable to save to database");
        res.json(err)
        console.log(err);
    });

});
router.get('/readItems',async(req , res)=>{

    ItemsModel.find({},(error,result)=>{
        if(error){
            res.status(400).send("unable to fetch from  database");
            res.json(error)
            console.log(error);
        }
        res.send(result);
        //res.status(200).send("Fetch from database");
        console.log("Fetch from database");
    });

});

/*
router.put('/deleteItems/:id',async(req , res)=>{

    const id = req.params.id;
    ItemsModel.findByIdAndRemove(id)
        res.send("Deleted  from database");
        //res.status(200).send("Fetch from database");
        console.log("Deleted  from database");

});
 */
module.exports = router
