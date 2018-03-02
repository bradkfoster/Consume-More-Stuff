const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();

const PORT = process.env.PORT || 8080;

const usersRoute = require(`./routes/users`);

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

app.use(`/api/users`,usersRoute);

app.get('/',(req,res)=> {
  res.send('smoke test');
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})