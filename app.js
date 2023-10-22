const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const User = require('./Login Page/user');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect('mongodb://localhost/passport-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});



// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + './Login Page/login.html');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + './Login Page/register.html');
});

app.post('/register', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    name: req.body.name,
    gender: req.body.gender,
    committee: req.body.committee,
    phone: req.body.phone,
    email: req.body.email,
  });
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.redirect('/register');
    }
    passport.authenticate('local')(req, res, () => {
      res.redirect('/main');
    });
  });
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/main',
  failureRedirect: '/',
}));

app.get('/main', (req, res) => {
  if (req.isAuthenticated()) {
    res.sendFile(__dirname + './MAIN/MainPage/Main.html');
  } else {
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
