const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()
const mongoose = require('mongoose')
const mongodb = require('mongodb')
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine' , "ejs")
app.use(express.static('public'))

mongoose.connect('mongodb://127.0.0.1:27017/ShoppingCart', {
    useNewUrlParser:true , 
    useCreateIndex:true,
    useUnifiedTopology:true
})
const User = require('./models/user')

app.get('/' , (req,res)=>{
    res.render('register')
})

app.post('/' ,async (req,res)=>{

    const temp1 = {
        id:req.body.ide,
        count:req.body.count
    }

    const temp2 = {
        contactName:req.body.contactName,
        detailAddress:{
            line1:req.body.line1,
            line2:req.body.line2,
            line3:req.body.line3
        },
        pin:req.body.pin,
        country:req.body.country
    }

    const user =new User({
        name:req.body.name,
        phone:req.body.phone
    })
    user.carts.push(temp1)
    user.address.push(temp2)

    await user.save().then((result)=>{
        res.send("Successfully Registered")
    }).catch((e)=>{
        res.send(e)
    })

})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});