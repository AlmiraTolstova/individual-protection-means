const fetch = require('node-fetch');

const express = require('express');
const mysql = require('mysql');

const app = express();
const host = '127.0.0.1'
const port = 4000

/*

//--------------------------------------------//
TABLE hand_size
Таблица в которой хранятся размеры перчаток
GET
Get list of size of hands
/hand_size
Response: List(Size of hands Preview)

POST
Create a new size
/hand_size/create
Response: List(Size of hands Preview)

PUT
Update a hand size
/hand_size/:id
Response: List(Size of hands Preview)

DELETE
Not available
//--------------------------------------------//
TABLE list_of_employees_siz
GET

POST
PUT
DELETE

//--------------------------------------------//
TABLE norms_table
GET
POST
PUT
DELETE
//--------------------------------------------//
TABLE positions
Таблица с названиями должностей
GET
Get list of positions name
/positions
Response: List(Size of positions name Preview)

POST
Create list of positions name
/positions/create
Response: List(Size of positions name Preview)

PUT
Update positions name
/positions/:id

DELETE
Not available

//--------------------------------------------//
TABLE rack
Таблица с позициями
GET
POST
PUT
DELETE

//--------------------------------------------//
TABLE shelf
GET
POST
PUT
DELETE

//--------------------------------------------//
TABLE shoe_size
GET
POST
PUT
DELETE

//--------------------------------------------//
TABLE size_table
GET
POST
PUT
DELETE

//--------------------------------------------//
TABLE siz_catalog
GET
POST
PUT
DELETE

//--------------------------------------------//
TABLE siz_positions
GET
POST
PUT
DELETE

//--------------------------------------------//
TABLE staff_table
GET
POST
PUT
DELETE

//--------------------------------------------//
TABLE structural_subdivision
GET
POST
PUT
DELETE

//--------------------------------------------//
TABLE validity_siz_catalog
GET
POST
PUT
DELETE

//--------------------------------------------//
TABLE warehouse
GET
POST
PUT
DELETE

//--------------------------------------------//

 */


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