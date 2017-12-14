require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const port = process.env.PORT;
const app = express();
const controller = require('./controller.js');

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);

    // db.new_planes().then(planes => { 
    //     console.log(planes) 
    // }).catch(err => console.error(err))

    // db.get_planes().then(planes => {
    //     console.log(planes)
    // }).catch(err => console.error(err))

}).catch(err=>console.error(err))

app.get('/api/airplanes', controller.getPlanes)

app.use( bodyParser.json() );
app.use( cors() );


app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

