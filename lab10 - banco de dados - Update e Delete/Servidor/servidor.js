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

var usuarios;
var carros;

client.connect(function(err) {
    if (err) {
        console.log('Erro ao conectar ao banco!'.red);
        console.log(err);
    } else {
        console.log('Conectado ao banco!'.green);
        var dbo = client.db("lab10_db");
        usuarios = dbo.collection("usuarios");
        carros = dbo.collection("carros");
    }
});

var server = http.createServer(app);
server.listen(80);
console.log('Servidor rodando...'.rainbow);

app.get('/', function(req, resp) {
    resp.redirect('/Projects.html');
});

// USUARIOS
app.post('/cadastrar_usuario', function(req, resp) {
    var data = {
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha
    };
    usuarios.insertOne(data, function(err) {
        if (err) resp.redirect('/cadastrar_usuario.html');
        else resp.redirect('/login.html');
    });
});

app.post('/login', function(req, resp) {
    var data = { login: req.body.login, senha: req.body.senha };
    usuarios.find(data).toArray(function(err, items) {
        if (items.length == 0) resp.redirect('/login.html');
        else resp.redirect('/lista_carros');
    });
});

// CARROS
app.post('/cadastrar_carro', function(req, resp) {
    var data = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        qtde_disponivel: parseInt(req.body.qtde_disponivel)
    };
    carros.insertOne(data, function(err) {
        resp.redirect('/lista_carros');
    });
});

app.get('/lista_carros', function(req, resp) {
    carros.find().toArray(function(err, items) {
        resp.render('lista_carros', { carros: items });
    });
});

app.post('/remover_carro', function(req, resp) {
    var mongodb = require('mongodb');
    var id = new mongodb.ObjectId(req.body.id);
    carros.deleteOne({ _id: id }, function(err) {
        resp.redirect('/lista_carros');
    });
});

app.post('/atualizar_carro', function(req, resp) {
    var mongodb = require('mongodb');
    var id = new mongodb.ObjectId(req.body.id);
    var newData = { $set: {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        qtde_disponivel: parseInt(req.body.qtde_disponivel)
    }};
    carros.updateOne({ _id: id }, newData, function(err) {
        resp.redirect('/lista_carros');
    });
});

app.post('/vender_carro', function(req, resp) {
    var mongodb = require('mongodb');
    var id = new mongodb.ObjectId(req.body.id);
    carros.find({ _id: id }).toArray(function(err, items) {
        if (items[0].qtde_disponivel > 0) {
            carros.updateOne({ _id: id }, { $inc: { qtde_disponivel: -1 } }, function(err) {
                resp.redirect('/lista_carros');
            });
        } else {
            resp.redirect('/lista_carros');
        }
    });
});