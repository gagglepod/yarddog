# YardDog

### MERN-based GraphQL Application

## ![YardDog v1.2 Screenshot](https://github.com/gagglepod/yarddog/blob/main/client/public/yarddog-v1.2-sceenshot.jpg)

## **Overview**

Yarddog is the application built to experiment with GraphQL.
It follows an online (free) tutoral called GraphQL with React by The Net Ninja (March 2018).
This tutorial is located on [YouTube](https://youtu.be/Y0lDGjwRYKw).

---

## **Lessons Learned**

#1 -- The tutorial does not include the change for how to call Express-GraphQL. When this tutoral was created, "express-graphql" was returning a direct function or a class with the function and could be assigned to any variable like graphqlServer. Now, for it work correctly, it must return the whole object that has the function included as follows:

_const { graphqlHTTP } = require('express-graphql');_

SOURCE: Stackoverflow Answer - [STACKOVERFLOW](https://stackoverflow.com/questions/62760975/graphqlhttp-is-not-a-function)

#2 -- When using lodash the syntax show does not show a space between declaring a constant and the "underline" character as follows:

_const \_= require('lodash');_

#3 -- When the ID is set to type GraphQLString then you have to pass the ID as a string. If you pass it as an Integer, it will fail. However, if you pass the ID as GraphQLID, you can pass the ID as a string or an integer. GraphQL does not care about the type when it is set this way.

SOURCE: GraphyQL Tutorial #11 - [YouTube](https://youtu.be/TkT2aLtX2tc)

#4 -- When the tutorial talks about mLab.com you must use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a new account (Free Tier) with either AWS or GCP (I chose Google). It takes some time to provision this instance (1-3 minutes). Once it is provisioned to use MongoDB:

- Create a user (Security >> Database Access >> Add New Database User)
- Find the Connect URI (Connect Button)
- Install Mongoose (using _npm install mongoose --save_)
- Test Database Connection

SOURCE: GraphyQL Tutorial #16 - [YouTube](https://youtu.be/3NdgP6AVYYs)

#5 - Seperations of Concerns requires you remove the connection URI and place it in an Environmental Variable:

- Create a new file in the folder called .env
- Add .env to .gitignore file
- Install dotenv (_npm install dotenv --save_)
- Replace the MongoDB URI string with process.env.CONNECT_DB

SOURCE: [Managing Environment Variables](https://stackabuse.com/managing-environment-variables-in-node-js-with-dotenv/)

#6 - GraphQL is not JavaScript (even though it looks like JS) and React will not understand it. This is why you need Apollo to bind the data act as a translator between React and GraphQL.

SOURCE: GraphyQL Tutorial #22 and #23 - [Front-End App](https://youtu.be/TRK_e3FV2IM)

#7 - Apollo Client has changed significantly since 2018. This required some thinking to make New Apollo work with tutorial. Thankfully, the Appollo Client is well documented on the [Apollo GraphQL](https://www.apollographql.com/docs/react/get-started/#installation) website.

**Example:**
Tutoral Import: _import { gql } from 'apollo-boost';_
Apollo Client Import: _import { gql } from '@apollo/client';_
