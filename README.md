# YardDog

### MERN-based GraphQL Application

## ![YardDog v1.3 Screenshot](https://github.com/gagglepod/yarddog/blob/main/client/public/yarddog-v1.3-sceenshot.jpg)

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

#8 - In the Chrome Console there are multiple Network 500 errors. I suspect this has to do with async calls to the cloud.mongodb.com data using GraphQL. Researching this problem lead me to understand that either Apollo or GraphQL itself does not do Promises well. The resulting behavior is a 500 error the first time a Book is clicked on because it takes some time (defined in milliseconds) for your app to make the call, GraphQL to retrieve the data, and to get a response. Once the book has been clicked, the 500 error does not repeat (cached?).

---

## **TODO**

This tutorial was designed to teach how to use GraphyQL using React. Even though it was an older tutorial, I did manage to get the final test application created. However, it needs to be redesigned and refactored if it was to be used in production.

Here's what I would do next if I were to turn this app into a real project:

#1 - Seperation of Concerns: The Admin Tools (Add Book) needs to be seperated and placed in a different part of the application.

#2 - The User can only select a Book to see Details. What about Author first selection?

#3 - When the list of Books gets too long, stange things start to happen to the interface. The UI needs to be reworked to all for long lists of Books. Possibly breaking down books by first letter, author, category, genre?

#4 - When you select a book you get a list of that authors other books. However, you cannot click on the other books to find the Book Details for those books. Need a way to extend this functionality to allow Users to click that list of books and find more details.

#5 - There are only book titles. What about pictures of the book cover?

#6 - The book details do not include the Book Summary. Back of the cover content would improve the book look up.

#7 - Where could you buy this book? Could it include API calls to other services (e.g. [Amazon Associates Program](https://affiliate-program.amazon.com/)) to purchase this book? What about affiliate links? Could this book app make money based on the books you like?

#8 - [GraphyQL vs. REST](https://blog.logrocket.com/switch-graphql-to-rest-with-sofa/) -- Is GraphQL faster than a regular database connection? The blog post [Why you shouldn't use GraphQL](https://blog.logrocket.com/why-you-shouldnt-use-graphql/) talks about reasons to consider using a [REST architecture](https://blog.logrocket.com/rest-api-firebase-cloud-functions-typescript-firestore/) instead of GraphQL.
