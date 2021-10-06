const express=require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys');
require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURI);



const app =express();

require('./routes/authRoutes')(app);

const PORT=process.env.PORT||5000;
app.listen(PORT);


//M0GkdsUnuiOGJ1WS
//saif
//mongodb+srv://saif:M0GkdsUnuiOGJ1WS@emaily.k9sv0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority