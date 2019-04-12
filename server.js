const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.get('/tip/:total/:tipPercentage', (request,response) => {
    response.send(`${request.params.total*request.params.tipPercentage/100}`);
})
//in localhost:3000/tip/100/20



const MagicB = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


//localhost:3000/magic/Will%20I%20Be%20A%20Millionare
app.get('/magicb/:thisishard',(request,response) => {
    response.send(`${MagicB[Math.floor(Math.random()*20)]}`); //20 is the max so 1*20 to give value
})















app.get('/greeting/:name', (request, response) => {
    
    response.send(`Hello! ${request.params.name}`);
});  //localhost:3000/greeting/Ashley
            //shows Hello Ashley
// app.get('/greeting/:name', (req, res) => {
//     res.send({params: req.params, queries: req.query})
//   });
app.listen(3000, () => {
    console.log("I am listening");
});

