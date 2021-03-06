const express = require('express')
const server = express()
const port = 8080
const bodyParser = require('body-parser')
const connection = require('./database/database')




//configurando express
    server.use(express.text())
    server.use(bodyParser.urlencoded({extended:false}))
    server.use(express.json())
    server.use(express.static('public'))
    server.set('view engine','ejs')

//configurando banco de dados
    connection.authenticate().then(()=>{
        console.log(`\nconexão com banco de dados efetuada com sucesso!\n`)
    })

// rotas
    //rota principal
        server.get(`/`,(req,res)=>{
            res.render(`index`)
        })
    
    //setings
        server.get(`/setings`,(req,res)=>{
            res.render(`setings`)
        })

server.listen(port,(err)=>{
    if(err) console.log(`erro ao iniciar o servidor! erro: ${err}`)
    console.log(`\nservidor iniciado com sucesso!\n`)
})