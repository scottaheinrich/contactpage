var expres = require('express');
var bodyParser = require('body-parser');
var engine = require('ejs-mate');
var app = express();

//serve static files from /public
app.use(express.static(__dirname + '/public'));

//use ejs-locals for all ejs templates
app.engine('ejs', engine);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Body parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var routes = require('./routes/index');
app.use('/', routes);

// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});
