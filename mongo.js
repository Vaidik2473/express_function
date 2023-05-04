const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/happyUserDB", { useNewUrlParser: true })

.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const User = mongoose.model("User", userSchema)

const jondoe = new User({
  email: "jondoe@hw.com",
  password: "12345678",
})

const margot = new User({
    email: "mr@hw.com",
    password: "asdfghjkl",
})

User.bulkSave([jondoe,margot])
