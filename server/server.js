const express = require('express'); //Line 1
const mongoose = require('mongoose');
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
console.log(mongoString);
mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

const app = express(); //Line 2
const cors = require('cors');
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 5000; //Line 3
const routes = require('./routes/routes');

app.use('/api', routes)
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
