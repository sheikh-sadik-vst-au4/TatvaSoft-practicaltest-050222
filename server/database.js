import mongoose from 'mongoose';
const url = "mongodb+srv://admin:admin@cluster0.y62xw.mongodb.net/userdata?retryWrites=true&w=majority";
const database = {};

database.connect = ()=> {
    mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,

    }, () => {
        console.log('connection successfull');
    })
}
export default database;