import mongoose from 'mongoose';

const DBConnection = async ()=> {
    const DB_URl =`mongodb+srv://sushrut:sushrut@filesharing.wqvpked.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(DB_URl, {useNewUrlParser: true});
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error hile connecting database', error.massage);
    }
}

export default DBConnection;