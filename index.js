const express = require("express")
const app = express()
const dummyData = require("./dummyData.js")
const morgan = require("morgan")
app.use(morgan('dev'))
app.use(express.static('public'))


const home = () => {
    return `<a href="http://localhost:3000/">home</a>`
}




app.get(`/`, (req, res, next) => {
    const dudes = dummyData.list()
    const html =`<!DOCTYPE html>
    <html>
    <head>
      <title>Cool Dude List</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
    
    <h1>LIST OF COOL DUDES!!</h1>
    <ul>
         ${dudes.map(
           (dude) =>
             `<li><a href="http://localhost:3000/dudes/${dude.id}">${dude.name}: ${dude.coolReason}</a></li>`
         ).join("")}
       </ul>
      
    </body>
  </html>`

    
    res.send(html)
})


app.get(`/dudes/:id`, (req, res, next) => {
    const id = req.params.id
    const dudes = dummyData.find(id)
   
    const html =`<!DOCTYPE html>
    <html>
    <head>
      <title>Cool Dude List</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
    ${home()}
    <h1>CHECK OUT THIS COOL DUDE!!!</h1>
    <ul>
         
             <li>${dudes.name}: ${dudes.coolReason}. He has ${dudes.coolPoints} cool points!!</li>
         
       </ul>
      
    </body>
  </html>`

    
    res.send(html)
})

app.get(`/health`, (req, res, next) => { 
  res.send(`${home()} <br> Sever is online!`)
})


app.listen("3000");