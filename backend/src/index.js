const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);





// https://github.com/loro557/fullstack.git






app.listen(4000, ()=>{
    console.log("App funcionando sem erros");
});