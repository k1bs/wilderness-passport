const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${3000}`)
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.render('index')
})

const passportRouter = require('./routes/passport-routes')
app.use('/passport', passportRouter)

const parksRouter = require('./routes/park-routes')
app.use('/parks', parksRouter)

const authRouter = require('./routes/auth-routes')
app.use('/auth', authRouter)

const userRouter = require('./routes/user-routes')
app.use('/user', userRouter)

app.use('*', (req, res) => {
  res.status(404).send('Not Found')
})
