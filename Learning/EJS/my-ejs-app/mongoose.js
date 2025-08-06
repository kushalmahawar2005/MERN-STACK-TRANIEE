import mongoose from 'mongoose';

async function connectToDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/dev');
        console.log("Connected Successfully to MongoDb.!");
    } catch (err) {
        console.log('Connection error:', err);
    }
}

connectToDB();


const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique: true},
    age : {type : Number , default: 18},
    isActive: {type : Boolean, default : true},

});

const User = mongoose.model('dev', userSchema);

async function createUser() {
    const newUser = new User({
        name : "Kushal",
        email : "Kushalmahawar114@gmail.com",
        age : 30,
    });

    try {
        const savedUser = await newUser.save();
        console.log('User Created' , savedUser);

    } catch (err) {
        console.log('Error 404', err);
    }
}

createUser();