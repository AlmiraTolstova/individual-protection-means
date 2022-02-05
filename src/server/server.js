const fetch = require('node-fetch');

const express = require('express');
const mysql = require('mysql');

const app = express();
const host = '127.0.0.1'
const port = 4000


app.use(express.json()) // Необходимо для парсинга body в соответствуюзих запросах в формате JSON
app.use((req, res, next) => {
    res.type('application/json') // Установка заголовка type
        .set( // Установка заголовка
            'Access-Control-Allow-Origin', // Заголовок
            '*' // Значение заголовка
        )
        .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
        .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next() // Если не вызвпать то запрос не пройдёт дальше
})



const connectionToDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "danone_siz"
});

connectionToDB.connect(function(err) {
    if (err) throw err;
    console.log("Connected to DB!");
});

app.route(`/hello`)
    .get((req, res) => {
        connectionToDB.query("SELECT * FROM `staff_table` WHERE 1",
            function(err, results, fields) {
                console.log(err);
                console.log(results); // собственно данные
                console.log(fields); // мета-данные полей
            });
        console.log("query is working",req.query);
    })

app.listen(port, host, () => console.log(`Server started at http://${host}:${port}`));