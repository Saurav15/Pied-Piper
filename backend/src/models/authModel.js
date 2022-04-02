const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true,"Email must be required!"],
        unique: [true,"Enter unique email."],
        trim: true,
        lowercase: true
    },
    password:{
        type: string,
        minLength: [7, "Password must be greater then 6 Characters."],
        trim: true,
    },
    FullName:{
        type : String,
        trim : true,
        lowercase : true,
        required : true
    },
    designation:{
        type : String,
        trim : true,
        enum : ['Team Manager', 'Engineer Manager'],
        default : "Team Manager"
    },
    role: {
        type: String,
        enum : ['USER','ADMIN','SUPERUSER'],
        default: 'USER',
    },
    stack: {
        type: String,
        enum: ['node','react','reactNative','flutter','devops']
    }
});

const Auth = mongoose.model('Auth',authSchema);


module.exports = Auth;