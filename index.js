const express=require('express');
//import passport 
const passport=require('passport');
// import strategy oauth
const GoogleStrategy=require('passport-google-oauth20').Strategy;
//import le credenziali di google
const keys=require('./config/keys');
const app =express();


//creare un istanza di google strategy di oauth20 
passport.use(
    new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},
//informazioni che riceviamo 
(accessToken,refreshToken,profile,done)=>{
console.log('accessToken',accessToken);
console.log('refreshToken',refreshToken);
console.log('profile:',profile);
}
)
);

app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
}
)
);


app.get('/auth/google/callback',passport.authenticate('google'));
const PORT=process.env.PORT||5000;
app.listen(PORT);


// console.developers.google.com


