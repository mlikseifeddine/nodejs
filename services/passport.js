const passport=require('passport');

const GoogleStrategy=require('passport-google-oauth20').Strategy;

const keys=require('../config/keys');


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
console.log('profile',profile);
}
)
);