# Passport configuration

* Using passport for authentication
* initialize passport for session management
* Using passport for serialize and deserialize user for the session
* using passport for jwt token based authentication without session
* creating strategy with passport

### passport for auth<br/>

`passport.authenticate("local",{successRedirect:"/",<br/> successFlash:"successfully signed in",<br/> failureRedirect:"/",<br/> failureFlash:"error signing in"})`

### passport for session management

* initialize passport<br/>
  `app.use(passport.initialize());`
* init session<br/>
  `app.use(passport.session());`

### passport for serialize and deserialize user for the session

* serialize user<br/>
  `passport.serializeUser(function(user, done) { done(null, user); });`
* deserialize user<br/>
  `passport.deserializeUser(function(user, done) { done(null, false); });`

### passport for jwt token based authentication without session

* jwt authenticate
  `passport.authenticate("jwt",{successRedirect:"/",<br/> successFlash:"successfully signed in",<br/> failureRedirect:"/",<br/> failureFlash:"error signing in"})`

### creating strategy with passport

* local strategy
  `const localOption = { usernameField: "email" };`

  `const localLogin = new LocalStrategy(localOption, function(
  email,
  password,
  done
  ) {
  User.findOne({ email: email }, function(err, user) {
  if (err) {
  return done(err);
  }
  if (!user) {
  return done(null, false);
  }

  user.comparePassword(password, function(err, isMatch) {
  if (err) {
  return done(null);
  }
  if (!isMatch) {
  return done(null, false);
  }

  return done(null, user);
  });

  });
  });`
