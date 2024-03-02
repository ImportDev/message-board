var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board',messages: 'messages' });
});

router.get('/new', function(req,res,next){
  res.render('form', { title: 'message' })
})

router.post('/new', function(req,res,next){
  res.render('form', { title: 'Express' })
  messages.push({text: req.body.text,
    user: req.body.name, added: new Date()});
  res.redirect('/')
})

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");



module.exports = router;
