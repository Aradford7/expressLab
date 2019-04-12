const express = require('express'); //from documentation: express is function
const app = express();//app is an object



app.get('/greeting/:name', (request, response) => {
    
    response.send(`Hello! ${request.params.name}`);
});  //localhost:3000/greeting/name
// app.get('/greeting/:name', (req, res) => {
//     res.send({params: req.params, queries: req.query})
//   });
app.listen(3000, () => {
    console.log("I am listening");
});

