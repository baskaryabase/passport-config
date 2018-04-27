# Passport configuration

- Using passport for authentication
- initialize passport for session management
- Using passport for serialize and deserialize user for the session
- using passport for jwt token based authentication without session
- creating strategy with passport

### passport for auth<br/>
   `passport.authenticate("local",{successRedirect:"/",successFlash:"successfully signed in",failureRedirect:"/",failureFlash:"error signing in"})`

### passport for session management
    - initialize passport
    `app.use(passport.initialize());`
    - init session
    `app.use(passport.session());`
    
### passport for serialize and deserialize user for the session
    - serialize user
    `passport.serializeUser(function(user, done) {
       done(null, user);
     });`
     - deserialize user
     `passport.deserializeUser(function(user, done) {
       done(null, false);
     });`
     
