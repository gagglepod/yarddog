const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// allow cross-origin requests
app.use(cors());

// connect to cloud.MongoDB.com database
const connect_db = process.env.CONNECT_DB;
const port = process.env.PORT;

mongoose.connect(connect_db);
mongoose.connection.once('open', () => {
    console.log('*** CONNECTED TO DATABASE ***');
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`*** APP NOW LISTENING ON PORT ${port} ***`);
});