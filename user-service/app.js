require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('User DB Connected'))
  .catch((err) => console.log(err));

const userRoutes = require('./src/routes/user.routes');
app.use('/user', userRoutes);


const PORT = process.env.PORT || 8002;

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
