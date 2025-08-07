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

// //To Insert Data: 

// async function createUser() {
//     const newUser = new User({
//         name : "Alice ",
//         email : "alice112@gmail.com",
//         age : 30,
//     }
// );

//     try {
//         const savedUser = await newUser.save();
//         console.log('User Created' , savedUser);

//     } catch (err) {
//         console.log('Error 404', err);
//     }
// }

// createUser();


// To Update Data 
// async function updateUser(email) {
//     try {
//         const updateUser = await User.findOneAndUpdate(
//             { email },
//             { age : 65 },
//             { new : true }
//         );
//         console.log('User Update', updateUser);
//     } catch (err) {
//         console.error('Error updating user :' , err);
//     }
// }

// updateUser('Kushalmahawar114@gmail.com');



// //To Delete any Data


// async function deleteUser(email) {
//     try {
//         const deletedUser = await User.findOneAndDelete({ email });
//         console.log('user Deleted: ', deletedUser);
//     } catch (err) {
//         console.error ('Error While Deleteing the Data : ', err );
//     }
// }

// deleteUser('Kushalmahawar114@gmail.com');



// // Perform Insert , Update , and Delete operation in a single bulkWrite 
// async function performOperations() {
//     const bulkOps = [
//         {
//             insertOne : {
//                 document : {
//                     name : "Alice", 
//                     email : "alice@example.com",
//                     age : 25,
//                     isActive : true,
//                 },

//             },
//         },

//         {
//             updateOne : {
//                 filter : {email : 'alice@example.com'},
//                 update : {$set : {age : 26, isActive : false }},
//             },
//         },

//         {
//             deleteOne : {
//                 filter : { email : "alice@example.com"},
//             },
//         },
//     ];

// try {
//     const result = await User.bulkWrite(bulkOps);
//     console.log('Bulk Operation Result: ', result);
// } catch (error) {
//     console.error('Error with bulk operation : ', error);
// }
// }

// performOperations();


// Mongobd Query operators

// const users = await User.find({age : { $eq : 30 }});
// console.log(users);

// const users = await User.find({
//     $and : [{ age : { $gt : 20 }} , { isActive : true }],
// });
// console.log(users);


//Validators in Moongoose
