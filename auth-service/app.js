require('dotenv').config();
const express = require('express');
const mongoose=require('mongoose')

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Database is connected successull"))

const authRoutes = require('./src/routes/auth.routes');
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
