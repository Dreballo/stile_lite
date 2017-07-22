//Here we declare our dependencies

var express = require('express'); // express server
var bodyParser = require('body-parser');//Middleware
var methodOverride = require('method-override'); //For PUT method in HTML

// Requiring our models for syncing
var db = require("./models");

var PORT = process.env.PORT || 3000;

//setting up express app
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Method override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//Express Handlebars
var exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: './views/layouts',
    partialsDir: './views/partials'
}));

app.set('view engine', '.hbs');
app.set('views', './views');

//API routes
var routes = require('./controllers/apiRoutes');
app.use('/', routes);

//starting server
db.sequelize.sync({force: false}).then(function(){
    app.listen(PORT, function (){
        console.log(`Server listening on PORT: ${PORT}`);
    });
});





