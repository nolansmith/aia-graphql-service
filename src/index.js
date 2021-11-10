const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

const typeDefs = require('./schema');
const resolvers = require('./resolvers')


const httpPort = process.env.PORT || 3000
const { gqlRoutes, healthRoutes } = require('./routes');
const apolloServer = new ApolloServer({ typeDefs, resolvers });



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use((req, res, next) => {
  console.log(
    JSON.stringify(
      {
        url: `${req.method} ${req.url}`,
        body: req.body,
      },
      null,
      2
    )
  );
  return next();
});

app.use(healthRoutes);
// app.use(gqlRoutes)

apolloServer.applyMiddleware({ app })

app.use('/*', function (req, res) {
  res.status(404).send('GraphQL Server 404')
})

app.listen(httpPort, () =>
  console.log(`[+] GQL Server started on port ${httpPort}`)
);

