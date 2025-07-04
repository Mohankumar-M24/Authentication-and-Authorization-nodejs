const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config(); 

const app = express();
app.use(express.json());


const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)

  .then(() => console.log("MongoDB connected"))

  .catch((err) => console.error("MongoDB connection error:", err));


app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('Welcome to back Auth API');
});

