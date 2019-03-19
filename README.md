## Why would you consider a Scripting Language as JavaScript as your Backend Platform?

* JavaScript is Asynchronous, meaning it may be used for Threads
* It is easier to use the same language both on front-end and back-end (FullStack Development)
* It is easier to build and setup with node.js

## Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat

### Node.js and Express 
#### Pros
- JavaScript being Asynchronous, meaning its easier to make the program do multiple tasks at the same time.
- Easy to build and setup. 
- Automatically all the benefits of JavaScript.
- node package managers open source tools (later on that subject).
- Easy to setup a REST-API with generators. 

#### Cons
- NOT suited for high CPU use and heavy Calculations, Java is well suited compared to node.JS. because JavaScript by nature runs on a single thread on a single core. only Input Output operations are asynchronous. this means, time taking calculations in node.JS will block the whole server.  
- Java is well integrated with Relational database compared with Node.JS. 
- Java handles server side errors (http status code 500). Node.JS will crash the whole server if this occurred. 

## Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.

Solution 1 (Build Threads)
* Node doesn't come automatically built with Threads, you have to build it from scratch. 

Solution 2 (Multiple Computers)
* Another Solution would be to take advantage of multiple computers, thereby creating multiple servers. This will achieve the multicore solutions, but thats only if you have the resources.

## Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:

### * Ensure that you Node-process restarts after a (potential) exception that closed the application
### * Ensure that you Node-process restarts after a server (Ubuntu) restart
### * Ensure that you can take advantage of a multi-core system
### * Ensure that you can run “many” node-applications on a single droplet on the same port (80)

## Explain the difference between “Debug outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code.

## Demonstrate a system using application logging and “colored” debug statements.

## Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript + relevant packages 

## Explain, using relevant examples, the Express concept; middleware.

## Explain, using relevant examples, how to implement sessions and the legal implications of doing this.

## Compare the express strategy toward (server side) templating with the one you used with Java on second semester.

## Demonstrate a simple Server Side Rendering example using a technology of your own choice (pug, EJS, ..).

## Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using, for example, the Request package.

## Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.

## Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.

## Explain, preferably using an example, how you have deployed your node/Express applications, and which of the Express Production best practices you have followed.

# NoSQL, MongoDB and Mongoose
 
## Explain, generally, what is meant by a NoSQL database.

## Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.

## Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB

## These two topics will be introduced in period-3

### * Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.

### * Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere

## Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB

## Explain the benefits of using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations

## Explain the “6 Rules of Thumb: Your Guide Through the Rainbow” as to how and when you would use normalization vs. denormalization.

## Demonstrate, using your own code-samples, decisions you have made regarding → normalization vs denormalization 

## Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)
