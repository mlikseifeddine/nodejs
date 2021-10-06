const passport=require('passport');

const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose=require('mongoose');

const keys=require('../config/keys');

const User =mongoose.model('users');


//creare un istanza di google strategy di oauth20 
passport.use(
    new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},
//informazioni che riceviamo 
(accessToken,refreshToken,profile,done)=>{
    new User({googleId:profile.id}).save();

}
)
);