const mongoose=require('mongoose');

const { Schema } = mongoose ;

const userSchema = new Schema(

{

    user_name:{

        type:String,
        required:true,
        unique:false,
    },
    
    constituency
    :{

        type:String,
        required:true,
        unique:false,
    },


    email:{

        type:String,
        required:true,
        unique:true,
    },

    password:{

        type:String,
        required:true,
        unique:false,
    },

    role:{
        type:String,
        required:true,
        unique:false

    }

}

)

const User = mongoose.model('User',userSchema);


module.exports =User;