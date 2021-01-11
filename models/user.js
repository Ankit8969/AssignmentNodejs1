const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        lowercase:true,
        default: 'John',
        enum: ['john', 'roshan', 'doe'],
        trim:true
    },
    phone: {
        type: Number,
        trim:true,
        required:true   
    },
    carts:[
        {
            id:{
                type:String,
                trim:true,
                required:true
            },
            count:{
                type:Number,
                trim:true,
                required:true
            }
        }
    ],
    address:[
        {
            contactName:{
                type:String,
                trim:true,
                required:true
            },
            detailAddress:{
                line1:{
                    type:String,
                    trim:true,
                    required:true
                },
                line2:{
                    type:String,
                    trim:true,
                    required:true
                },
                line3:{
                    type:String,
                    trim:true,
                    required:true
                }
            },
            pin:{
                type:Number,
                required:true
            },
            country:{
                type:String,
                trim:true,
                required:true
            }
        }
    ],
    
})

const User = new mongoose.model('User' , userSchema)

module.exports = User 