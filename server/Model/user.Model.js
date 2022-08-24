const mongoose=require ("mongoose")

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required : [true,"please provide your firstname"] , //if false then message is printed
        trim : true ,
        min : 3 ,
        max : 20 
    },
    email:{
        type:String,
        required : [true,"please provide your email"] , //if false then message is printed
        trim : true ,
        unique:true,
        lowercase : true 
    },
    password:{
        type:String,
        required : [true,"please provide your email"]
    }
},

    {
        timestamps:true
    }


)

const usermodel=mongoose.model("User",userSchema);

module.exports=usermodel;
