const express=require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const keys=require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);



const app =express();

app.use(
    cookieSession({
    maxAage:30*24*60*60*1000,
    keys:[keys.cookieKey]
        })
    );
    
    app.use(passport.initialize());
    
    app.use(passport.session());
    
require('./routes/authRoutes')(app);

const PORT=process.env.PORT||5000;
app.listen(PORT);


//M0GkdsUnuiOGJ1WS
//saif
//mongodb+srv://saif:M0GkdsUnuiOGJ1WS@emaily.k9sv0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority