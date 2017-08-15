//Here we declare our dependencies

const express = require('express'); // express server
const bodyParser = require('body-parser');//Middleware
const methodOverride = require('method-override'); //For PUT method in HTML

// Requiring our models for syncing
const db = require("./models");

const PORT = process.env.PORT || 3000;

//setting up express app
const app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

//=================================================================
// Sets up the Express app to handle data parsing
//=================================================================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Method override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//=================================================================
// Express Handlebars
//=================================================================
const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: './views/layouts',
    partialsDir: './views/partials'
}));

app.set('view engine', '.hbs');
app.set('views', './views');

//=================================================================
// Passport Config
//=================================================================
const session = require('express-session');
const passport = require('passport');

require('./config/passport')(passport);

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // express session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions


//=================================================================
// Configure route controllers
//=================================================================
const routes = require('./controllers/apiRoutes');
app.use('/', routes);

//=================================================================
//Starting server
//=================================================================
db.sequelize.sync({force: false}).then(function(){
    app.listen(PORT, function (){
        console.log(`Server listening on PORT: ${PORT}`);
    });
});





