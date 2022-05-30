const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectWithDB = require('./db');
const schema = require('./schema/schema');
const cors = require('cors')
const app = express();
app.use(cors())
connectWithDB();
app.use('/graphql', graphqlHTTP({
    // pass in a schema property
    schema: schema,
    graphiql: true,
}));
app.listen(5000, () => {
    console.log('node server is running at: ', 5000)
})