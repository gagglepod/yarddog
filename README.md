# yarddog

### MERN-based GraphQL Application

---

## **Overview**

Yarddog is the application built to experiment with GraphQL.
It follows an online (free) tutoral called GraphQL with React by The Net Ninja (March 2018).
This tutorial is located on [YouTube](https://youtu.be/Y0lDGjwRYKw).

---

## **Tech Stack**

- VSCode (Atom)
- Node.js
- GraphQL
- Express
- Express-GraphQL
- Nodemon
- Lodash
- React.js
- MongoDB

---

## **Third-Party**

- YouTube Account
- Github Account
- mLab Account

---

## **Lessons Learned**

#1 -- The tutorial does not include the change for how to call Express-GraphQL. When this tutoral was created, "express-graphql" was returning a direct function or a class with the function and could be assigned to any variable like graphqlServer. Now, for it work correctly, it must return the whole object that has the function included as follows:

_const { graphqlHTTP } = require('express-graphql');_

SOURCE: [STACKOVERFLOW](https://stackoverflow.com/questions/62760975/graphqlhttp-is-not-a-function)

#2 -- When using lodash the syntax show does not show a space between declaring a constant and the "underline" character as follows:

_const \_= require('lodash');_
