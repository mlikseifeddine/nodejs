const passport=require('passport');

const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose=require('mongoose');

const keys=require('../config/keys');

const User =mongoose.model('users');


passport.serializeUser((user,done)=>{
done(null,user.id);

});

passport.deserializeUser((id,done)=>{
    User.findById(id)
    .then(user=>{
        done(null,user);
    });

});


//creare un istanza di google strategy di oauth20 
passport.use(
    new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},
//informazioni che riceviamo 
(accessToken,refreshToken,profile,done)=>{
    //per cercare profileid atraverso il collezione
    User.findOne({googleId:profile.id})
    .then((existingUser)=>{
        if(existingUser){
            //abbiamo gia un record con lid del profile
            done(null,existingUser) 
        }else{
            //non abbiamo un record creamo un nuovo user
            new User({googleId:profile.id}).save()
            .then(user=>done(null,user));
        }

    });
   

}
)
);