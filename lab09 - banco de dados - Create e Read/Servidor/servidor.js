var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://nicolaschagaspereira_db_user:Wdy0lwpkMPfzUMie@cluster0.0v8x0vz.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true });

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

var posts;

client.connect(function(err) {
    if (err) {
        console.log('Erro ao conectar ao banco!'.red);
        console.log(err);
    } else {
        console.log('Conectado ao banco!'.green);
        var dbo = client.db("blog_db");
        posts = dbo.collection("posts");
    }
});

var server = http.createServer(app);
server.listen(80);
console.log('Servidor rodando...'.rainbow);

app.get('/', function(req, resp) {
    resp.redirect('/Projects.html');
});

app.get('/blog', function(req, resp) {
    posts.find().toArray(function(err, items) {
        resp.render('blog', { posts: items });
    });
});

app.post('/cadastrar_post', function(req, resp) {
    var data = {
        titulo: req.body.titulo,
        resumo: req.body.resumo,
        conteudo: req.body.conteudo
    };
    posts.insertOne(data, function(err) {
        if (err) {
            console.log(err);
        }
        resp.redirect('/blog');
    });
});