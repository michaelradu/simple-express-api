# Simple Express REST API

This is an example of a basic RESTful API implemented in Express for educational purposes. The code only implements GET and POST, is self-explanatory and has comments explaining each and every step of the process to make learning easier.

## What's an API?

An API (application programming interface) is simply some software that sends some information back and forth between an app and a user. 

## What's REST/a RESTful API?

REST is a set of constraints [(listed here)](https://www.redhat.com/en/topics/api/what-is-a-rest-api#rest), not a standard or protocol, that API developers can implement to create a "RESTful API". REST supports many protocols but the most used one is **HTTP**. When a request is made with an *HTTPRequest* the RESTful API responds with a *HTTPResponse*, typically containing data in the **JSON** or **XML** format.

REST APIs can be used to perform different actions and support the following 5 methods:

* **GET** - Retrieve existing data from a database/server.
* **POST** - Create new data
* **PUT** - Replace existing data.
* **PATCH** - Update existing data.
* **DELETE** - Delete existing data.

## What's Express?

Express is just a Node.js framework that simplifies the process of building a RESTful API.


