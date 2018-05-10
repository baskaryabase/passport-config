# Passport configuration

* Using passport for authentication
* initialize passport for session management
* Using passport for serialize and deserialize user for the session
* using passport for jwt token based authentication without session
* creating strategy with passport

### passport for auth<br/>

`passport.authenticate("local",{`<br/>
`successRedirect:"/",`<br/>`successFlash:"successfully signed in",`<br/> `failureRedirect:"/"`,<br/> `failureFlash:"error signing in"`<br/>`})`

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
  `passport.authenticate("jwt",`<br/>
  `{successRedirect:"/",`<br/>
  `successFlash:"successfully signed in",`<br/>
  `failureRedirect:"/",`<br/>
  `failureFlash:"error signing in"`<br/>`})`

### creating strategy with passport

* local strategy <br/>
  `const localOption = { usernameField: "email" };`

  `const localLogin = new LocalStrategy(localOption, function(`<br/>
  `email,`<br/>
  `password,`<br/>
  `done`<br/>
  `) {`<br/>
  `User.findOne({ email: email }, function(err, user) {`<br/>
  `if (err) {`<br/>
  `return done(err);`<br/>
  `}`<br/>
  `if (!user) {`<br/>
  `return done(null, false);`<br/>
  `}`<br/>

  `user.comparePassword(password, function(err, isMatch) {`<br/>
  `if (err) {`<br/>
  `return done(null);`<br/>
  `}`<br/>
  `if (!isMatch) {`<br/>
  `return done(null, false);`<br/>
  `}`<br/>

  `return done(null, user);`<br/>
  `});`<br/>

  `});`<br/>
  `});`

* jwt strategy <br/>
  `const jwtOptions = {`<br/>
  `jwtFromRequest: ExtractJwt.fromHeader("authorization"),`<br/>
  `secretOrKey: config.secret`<br/>  
  `};`

  `const jwtLogin = new jwtStrategy(jwtOptions, function(payload, done) {`<br/>  
   `User.findById(payload.sub, function(err, user) {`<br/>  
   `if (err) {`<br/>  
   `return done(err, false);`<br/>
  `}`<br/>
  `if (new Date() <= payload.iat + 6000) {`<br/>
  `if (user) {`<br/>
  `return done(null, user);`<br/>
  `} else {`<br/>
  `return done(null, false);`<br/>
  `}`<br/>
  `} else {`<br/>
  `return done(null, false);`<br/>
  `}`<br/>
  `});`<br/>
  `});`<br/>
