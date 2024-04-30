const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port =process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/api', userRoutes)


//routes
app.get('/', (req,res) =>{
 res.send('bienvenido al api');
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('conectado a mongodb atlas'))
.catch((error) => console.error(error))

app.listen(9000, () => console.log('el servidor esta escuchando en la puerta', port));