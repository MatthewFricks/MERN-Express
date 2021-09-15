const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


require("./server/config/config");


require("./server/routes/route")(app)




app.listen( port, () => console.log(`Listening on port: ${port}`) );