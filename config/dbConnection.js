const mongoose = require('mongoose');
mongoose.set('strictQuery', true); // or false, depending on what you need


const connectDB = async() => {
	try
	{
		const db = process.env.MONGO_URI;
		await mongoose.connect(db);
		console.log("MongoDB connected...");
	}
	catch(err)
	{
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;