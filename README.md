
## :pencil: **Summary**

|Sumary                                                                                     | Introduction                                                     | Database                                                                                     | 
|-                                                                                          |-                                                                 | -                                                                                            | 
| [Who?](#who)                                                                             | [What is a Database?](#what-is-a-database)                       | [Creating a project](#creating-a-project)                                                    |
| [What? *What will we build?*](#what-what-will-we-build)                                 | [What is an API?](#what-is-an-api)                               | [Learning how to perform CRUD with Mongoose](#learning-how-to-perform-crud-with-mongoose)    | 
| [Why? *What is our objective?*](#why-what-is-our-objective)                             | [HTTP Verbs](#http-verbs)                                        | [What is **CRUD**?](#what-is-crud)                                                           |
| [How? *Are are the tools that we will use?*](#how-what-are-the-tools-that-we-will-use) | [Installing MongoDB on Ubuntu](#installing-mongodb-on-ubuntu)    | [**C**reating the basic file](#creating-the-basic-file)                                      | 
|                                                                                           | [Installing a client for Mongo](#installing-a-client-for-mongo)                                                                  | [Adding rules to Text model](#adding-rules-to-text-model)                                    |
|                                                                                           |                                                                  | [**R**eading data](#reading-data)                                                            | 
|                                                                                           |                                                                  | [**U**pdating data](#updating-data)                                                          | 
|                                                                                           |                                                                  | [**D**elete data](#delete-data)                                                              |

| API: Introduction                                                 | API: Creating the CRUD      |
| -                                                                 | -                           |
| [Creating the basic API file](#Creating-the-basic-API-file)       | [Creating a GET route](#Creating-a-GET-route)                               |
| [Creating the basic API file](#Creating-the-basic-API-file)       | [Organizing our files and project](#Organizing-our-files-and-project)       |
| [Creating routes](#Creating-routes)                               | [Creating a real GET route](#Creating-a-real-GET-route)                     |
|                                                                   | [Refactoring the code](#Refactoring-the-code)                               |
|                                                                   | [Route to CREATE a Text](#Route-to-CREATE-a-Text)                           |
|                                                                   | [Route to GET one Text](#Route-to-GET-one-Text)                             |
|                                                                   | [Route to UPDATE a Text](#Route-to-UPDATE-a-Text)                           |
|                                                                   | [Route to DELETE a Text](#Route-to-DELETE-a-Text)                           |


## Who?
Hi there! My name is Vinícius Kammradt, I`ve been playing with technology since 2016. I really enjoy creating new stuff and also love to spread any knowledge that I have with others.  
Now, with help from [Gabriela de Almeida Riul](https://www.linkedin.com/in/gabriela-de-almeida-riul-2a1321184/), an Electrical Engineering student and also volunteear at [PET EEL](http://www.peteel.ufsc.br/), who is also interested in development, we will try to beat a challenge proposed by [Código Falado](https://github.com/codigofalado).

## What? *What will we build?*
The main idea of this project is to create a complete website to [this challenge](https://github.com/codigofalado/desafio333/blob/master/2020-Janeiro-Leitura-Organica/README.md). 
> O cliente (Leitura Orgânica) precisa de uma Landing Page para possibilitar que o usuário calcule sua velocidade de leitura.  

Our technical structure:
<div align="center">
    <img src="./images/structure.png">
</div> 

Our Vue.js website will be bassically a landing page that will use our API to get some information and also be able to manipulate it. We also need the API to be able to send e-mails, so we will use [Sendgrid](https://sendgrid.com/) to do it.


## Why? *What is our objective?*
Our main objective is **learn**. After that, we want to be able to understand how a real website and API work, and after that, create our solution based on what we learned.   


## How? *What are the tools that we will use?*
We will use **Javascript** as our main programming language.  
So, to create our front-end we will use **Vue.js**. Primarily because it is an easy framework to start with and also really powerfull. To make stuff look better we will use **Vuetify**, a library that has styled components.  
We will also need some server-side processing to access the Database and send emails, so we will use **Express.js** to do that. This is a really easy to use framework that allows us to create endpoints and also trigger all other stuff that we need to do in the server.  


## What is a Database?
A database is a place where you can save information. Simple as that. But the good point is that you can organize the data in a specific way, so everytime you search for information it will be organized in the same way. The same rule applies for when you want to save new information, it will follow all rules that you created.  
When working with database, we use the term `Table` or `Collection` for a group of information and rules that we want to save.  
A `Table/Collection` for `Cakes` would look something like this:  

| Cake    |
| -       | 
| ID      |
| Name    |
| Price   |
| Flavor  |


And after creating some information in the `Table Cake`, it would look something like this:  

| ID | Name        | Price | Flavor                 |
|-   |-            |-      |-                       |
| 1  | Formigueiro | 40.00 | Black and White Choco  |
| 2  | Banoffe     | 70.00 | Banana                 |
| 3  | Nega Maluca | 40.00 | Choco                  |

> When working with javascript, we can imagine a `Cake` being an object like this: 
```javascript
let firstCake = {
  id: 1,
  name: 'cakeName',
  price: 20,
  flavor: 'cakeFlavor'
}
```
> And an example of reading information from the Table `Cake` should be something like this:  
```javascript
let listOfCakes = myDatabase.Cake.All() 
// This is just a fake example, we will learn how to interact with a database later

console.log(listOfCakes)
// Will print somenthing similar to
[
  {
    id: 1,
    name: 'Best cake ever',
    price: 20,
    flavor: 'choco'
  },
  {
    id: 2,
    name: 'A nice cake',
    price: 30,
    flavor: 'apple'
  } 
]
```


## What is an API? 
API is the acronym for Application Programming Interface, which means that it is actually an running application that does something and is available to people to use.  
An easy example of a well know API is the [GithubAPI](https://developer.github.com/v3/): we can use it to `GET` a information about a user's repositories with a simple `call:`
```javascript
const axios = require('axios')

let user = 'kammradt'
axios.get(`https://api.github.com/users/${user}/repos`).then(result => { // 1.
    console.log(result) // 2.
})
```
> 1. We are using a `.get()` method to literally get information from some source. This source of information is the API URL. 
> 2. The information displayed will be a list of repositories from a specific user. 

It is really commom for people or bussiness to create an API and give it to the clients/users to use, because in this way, we can control what we display and show.
*(It is not secure and not a good idea at all give clients or users access to our server or databases)*  
Of course APIs can also be developed to manipulate data, such as creating new information with a `POST` call, or even delete information with a `DELETE` one.  
Our plan is to create an API to manipulate some `Texts`, such as `Creating`, `Listing all`, `Updating` and `Deleting`.

### HTTP verbs
As we saw before, an API is a really interesting way of creating and provide a service or just information. Now, to understand how we can **use**/**consume** an API, we need ot understand a little bit about **HTTP Verbs/calls**.  
When we are accessing a website, we dont even notice, but we are making **HTTP calls**. But, what are they? They are basically how we *request* data from the website server and receive a *response* that is displayed in our browser (such as Chrome or Firefox).  
Most of the time, we receive just HTML responses with the content of the website, because them the browser understand it and can display it to us in a beautiful way.  
But, when we are working with APIs, most of the time we will receive just a bunch of information formatted to be used by other websites. Lets imagine: 

#### Simple example of a Recipes website 
You have a simple website to display all kinds of **Recipes**.  
The website only shows 10 recipes every time and the user can also use a search bar to find other recipes.  We can imagine the structure being something like:   
We have a **Vue.js** front-end that displays beautiful HTML pages (could be any JS framework or just HTML+JS), and when the website is loading, it **calls** a **back-end** using *axios* to perform a **GET** request to retrieve the 10 most famous recipes. But, in our back-end server, we also have a **Database** with more than 10 milion recipes. We keep this recipes storaged in the database because it would be almost impossible to create a variable in the front-end to hold this amount of information. And also, it could cause our website to be really slow and bad to use. We, of course, do not want to lose this information, so we use a good database with a lot of rules to make sure all recipes follow a **Model**. 
To be able to access all the others recipes, we can create an **API** that accepts a **GET** request, that is called everytime the users use the search bar, and the **API** can just return a **JSON** with the recipes that contain the searched phrase/word.
> JSON is a really commom way of sending and receiving data. It is a acronym for: **J**ava**S**cript **O**bject **N**otation. When working with javascript, it is really easy to create an example:  
> ```javascript
> let jsonExample = {
>   recipeTitle: 'The best choco cake',
>   preparationTime: 50,
>   difficulty: 'Easy'
> }
> ```
> As you can see, a JSON is literally a simple Javascript Object variable.

#### Examples of HTTP verbs and CODES
| Verb        | Used to |
| -           | -       | 
| **GET**     | GET information/JSON or some content such as images.                |
| **POST**    | CREATE/SEND new information. During registration, for example.      |
| **PUT**     | UPDATE old information. Such as changing an account password.       |
| **DELETE**  | DELETE information. Such as when you delete a photo from Instxgrxm. |
<br>

When we make request and receive responses, together with the information we send or receive, we also receive a **HTTP STATUS CODE**, that is basically a number that represents a **STATUS**, that coudl be, for example: Success, Error, Not Found, Missing Permission, etc.

| Code 	| Meaning                               	            |
|-    	|-                                      	            |
|  200 	| OK, this is a success                 	            |
|  201 	| CREATED a resource                    	            |
|  400 	| BAD REQUEST, verify the body/params information   	|
|  401 	| UNAUTHORIZED, give a me correct token/information 	|
|  403 	| FORBIDDEN, you should not ask again   	            |
|  404 	| NOT FOUND, try another resource       	            |

## Installing MongoDB on Ubuntu

1. Go to [this link](https://www.mongodb.com/download-center/community)
2. Select your OS version
3. Click on `Download`
4. Click on the `.deb` file to install  
  4.1.  If you receive a message error saying that you need to install some `dependencies`, you can do it easily with `sudo apt install {dependecyName}`.  
  For example: `sudo apt install libcurl3`

Now you can verify if your installation was successfully:
1. Verify if you can start the database: `systemctl start mongod`
2. Verify if it was started: `systemctl status mongod`

## Installing a client for Mongo
A database client is just a program that can diretcly connect to the Database and interact with it. It is common to use it during the process of development and also after that to verify if everything is OK with our database. At this moment, we will install a client that is compatible with **MondoDB**, called **Compass**. 

1. Go to [this link](https://www.mongodb.com/download-center/compass)
2. Select your OS version
3. Click on `Download`
4. Click on the `.deb` file to install  

When using and creating our project, we will interact with the database using code, because in this way, we can re-use a lot of things and can do a lot more automatically with all the structures that Javascript provide to us.


## Creating a project
1. Create a folder for it: `mkdir myProjectName`
2. CD into it: `cd myProjectName`
3. Initialize it: `npm init -y`
4. Install the `mongodb` library so we can use it with code: `npm i mongoose@5.3.16`

## Learning how to perform CRUD with Mongoose

### **What is CRUD**?
CRUD is a acronym for `CREATE`, `READ`, `UPDATE`, `DELETE`. These are the basic operations that we are going to perform on our Database.  
In this project, we will perform stuff like:  
- **Create** a new `Text` with title and text.
- **Update** a `Text`, by changing the title or the literall text.
- **Delete** a previously created `Text`.
- **Get** all texts that are in our database.
- **Get** a single text that are in our database by its `ID`.

We need to be able to `CREATE` information and insert it on our database. After that, maybe we want to `READ` it and display to our users. If the users want to change it, we need to be able to `UPDATE` our database information, and if they do not like it, we will need to `DELETE` it.

### **Creating the basic file**
1. Open the project with a code editor:  
`cd myProjectName && code .`
2. Create a file named `mongodb.js` for first tests and configuration
3. Add the content for initial configuration:
4. To run, just open the terminal and type `node mongodb.js`

```javascript
const moongose = require('mongoose')

// 1.
const connectionURL = 'mongodb://127.0.0.1:27017/database-texts' 

moongose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true // 2.
})

// 3.
const Text = moongose.model('Text', {
    title: {
        type: String,
    },
    text: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
})

// 4.
let myTitle = 'History of super hero!'
let myText = 'My great text about heroes... Really Long...'
let sizeOfText = myText.split(' ').length 

// 5.
const willBeSaved = new Text({
    title: myTitle,
    text: myText,
    size: sizeOfText
})

// 6.
willBeSaved.save()
``` 
> 1. This URL is created by using the URL from the database (`mongodb://127.0.0.1:27017`) and the name that we want to give to our database (`database-texts`). As we say before, a Database can be defined as a place where we storage data in a ceratin way, with some rules and validations. But in fact, we whe look at it, it is just an application running that can write information and manipulate it by modifying files (but in a really organized and structured way). This URL is just a way of connecting to it, like when we access a website by its URL.  
> 2. Just to make sure that our Database will create the correct IDs and Indexes.
> 3. Now we are **defining** a **Model** called Text. So, every time that we need to save a new Text, it will follow the same pattern and fields. This will be really useful for maintaining and organizing our Database. It is called Model because it is literally a Model that will be followed when we want to create a new **Text**. The appeareance is really similar to a Javascript Object or a C Struct, for example.  
> As an example of some rules, we are saying that the **text** and **size** are required, but the title is optional.
> 4. Just creating the variables that we will use to create a Text object and save in our Database. In a real application, problably a user would give this data to us. When talking about an API, the users can make **Requests** to us with some data, and we will use that data to create new `Text`s in ourn database.
> 5. Creating a Text object using our variables. This is possible because we defined a `Text` model with some rules with `mongoose`. This is basically the same as creating a `model/collection` directly in the database, but now with code and faster.
> 6. Now we are calling the method `.save()` on your **Text** object that were created by using our **Model**. Note that this is not a simple object, is a object from the **Text** model.  
  

### **Adding rules to Text model**
We actually can improve our model by adding some extra rules to it, like this: 
```javascript
const Text = moongose.model('Text', {
  title: {
    type: String,
    trim: true // 1.
  },
  text: {
    type: String,
    required: [true, 'Please, insert some Text!'],
    trim: true // 1.
  },
  size: {
    type: Number,
    required: true,
    min: [600, 'Text size must be equal or bigger than 600'], // 2.
    max: [1000, 'Text size must be equal or less than 1000!']  // 2.
  }
})
```
> 1. The trim property will remove extra spaces from our String. For example, if a user is trying to save a title like `'  My title '`, it will actually be saved as `'My Text'`.
> 2.  `min` and `max` will help us control the size. For example, remember that texts have a size rule? So we can apply it here and guarantee that all our saved texts have the minimum and maximum size. 

Creating some rules will help us during the process of creating new `Text`s, because now when we call the `.save()` method, before saving this information in the database, it will first validate using our rules, and it will guarantee that our database is well formatted and when we need information from it, they will be always following the same pattern and `model`.

### **Reading data** 
After creating some objects in your database, maybe it is a good ideia discover how we can find those values and show to our users, for example. This is a simple task, and can be done as follow:

```javascript
willBeSaved.save().then(saved => { // 1.
  console.log(`We saved this Text: ${saved}`) // 2.
  let idOfSavedText = saved.id // 3.
  
  Text.findById(idOfSavedText).then(found => { // 4.
    console.log(`The same Text: ${found}`) // 5.
  }).catch(notFound => {
    console.log(`Failed to find: ${notFound}`) // 6.
  })

}).catch(failed => {
  console.log(`We have erros!: ${failed}`) // 7.
})
```
> 1. Now we are verifying if our object was successfully saved on our database. If everything was fine, we will receive a `saved` object that is a `Text` object with an `ID` and same fields that we give to it previously. At this moment, this information is present in our database.
> 2. This will show our `saved` object. This is a Javascript variable that represents our saved object from the database.
> 3. From this `saved` object, we are getting the ID that the database generated and saving it on `idOfSavedText`. This is an unique identifier that every `Text` that we have will have, and we can find any `Text` if we know its `ID`
> 4. This is the function that does the job of searching a object by id: `Text.findById(...)` and we are gonna use it to find the object that we saved some seconds ago.
> 5. If everything was fine, we will receive the same object as we had before with `saved`.
> 6. If this was a real app, maybe a user was trying to find an object and search for the wrong id, so it will return an error.
> 7. This console will be printed if we had some validation errors or other problem.

To find all `Text`s is also really easy, we can do it with this code:
```javascript
Text.find().then(texts => { // 1.
  console.log(texts) // 2.

  texts.forEach(text => {
    console.log(text.id) // 3.
  })

})
```
> 1. We can use the method `.find()` to get all `Text`s. It will basically find all texts, because we are not using any filters, like .find({title: 'Harry Potter'})
> 2. This will be an `Array` of `Text`s. Example:  
`[{id: 1, title: 'abc'}, {id: 2, title: '123'} ...]`
> 3. We will print just the id of each `Text` that we found in our database.



### **Updating data**
Update information is a really important part, and it is really easy to do it. We can do it like this:
```javascript
const willBeSaved = new Text({
  title: 'A great Title',
  text: 'Long text...',
  size: 2
})

willBeSaved.save().then(saved => {
  console.log(saved.title) // 1.

  saved.title = 'My new Title'
  saved.save().then(updated => {
    console.log(updated.title) // 2.
  })
})
```
Now, if you verify in your Database using compass, or by using code with `.findById()`, you will see that the `title` changed from `A great Title` to `My new title`.  
OBS: Note that you can update any `Text` that is in our database, not only the ones you saved some seconds ago. You can first use a `.find()` to get all `Text`s, after that, verify which one you want to update and get it by using `.findById()`, and in the end, edit the values and call `.save()`.

### **Delete data**
It is also a good ideia know how to remove data if it is not necessary or our user wants to, and we can do it like this:

```javascript
const willBeSaved = new Text({
  title: myTitle,
  text: myText,
  size: sizeOfText
})

willBeSaved.save().then(saved => {
  // 1. 

  // 2.
  Text.findByIdAndDelete(saved.id).then(deleted => {
    console.log(`I deleted this: ${deleted.id}`) 

    Text.findById(deleted.id).then(willBeNull => {
      console.log(willBeNull) // 3.
    })

  })
})
```
> 1. We are first saving a new object in our Database named `saved`. Lets imagine that after some time, the users wants to delete it. Then, we will do the code below 2.
> 2. We will call the method `findByIdAndDelete(id)` and this method will delete the object and also return a copy of it. (But the object is deleted!!! It is just a copy to display a last information of it).
> 3. If we try to find the object that we just deleted by it's `ID`, it will return a `null`, because it was previously deleted.

## Creating the basic API file

Lets start by installing our Back-end framework that will be used. We used `Vue.js` to create beautiful pages, and we will use `Express` to create our server.
1. Run `npm install express` in the terminal inside our project folder.
2. Run `npm install nodemon` in the terminal inside our project folder.
3. Run `npm install cors` in the terminal inside our project folder.

> 1. Express is a javascript library that help us creating APIs similars to what we have seen on Github, for example.  
Using it, will be possible to do something like:
`GET www.site.com.br/api/getTexts` and receive a list of ours Texts from the Database.
> 2. Nodemon is just a small library to help us during the process of development. Remember that when we were using `Vue.js`, file changes were reloaded automatically to the page? This will do the same but for our API.
> 3. The package will help us control who can access our API by creating some CORs rules, this will allow only some URLs to communicate with our endpoints.


Now, we are going to start our real project. Let's create a file that will work as the start of our API.  
We can create an `index.js` file in our `src` folder.
> src/index.js
```javascript
const express  = require('express') // 1.
const cors = require('cors') // 2

const app = express() // 3.
const port = process.env.PORT || 3000 // 4.

app.use(cors({
  origin: 'http://localhost:8080' // 2.1
}))

app.listen(port, () => { // 5.
    console.log(`Server is ON and running on port ${port}`)
})
```

> 1. Importing our Express library.
> 2. Importing the CORs library.
> 2.1 Now we are saying that only that origin can call and use our API. This address would probraly be one of our clients or maybe our Front-end.
> 3. Creating a variable for our app by using the express library.
> 4. We will use the default port on our real server (`80`) or in development it will `3000`.
> 5. We will tell the app to use the port (`80` or `3000`), and if everything is OK, we will receive a message in the console.


Now, we can configure our `package.json`.

```javascript
  "scripts": {
    "start": "node src/index.js", // 2.
    "dev": "nodemon src/index.js" // 1.
  },
```

> 1. `npm run dev` will start a development server.
> 2. `npm run start` will run a real server that will onyl be used after we finish our app.

So, just to verify if everything is ok, we can run `npm run dev`.

## Creating routes
Now, we can start building some routes to make available. But first, what is a route?  
We can call a route every "link" in our API that does something. So, for example:  
This is a route to get information about kammradt's repositories: "`https://api.github.com/users/kammradt/repos`".  
It is really common to call it and `endpoint` too.  


### Creating a GET route
Lets start by creating a fake route just for testing propouses. Using our `index.js` file:
```javascript
... // After imports and etc... 

app.get('/', (request, response) => {   // 1.
    let responseMessage = {
      message: 'Hello!' // 2.
    }
    return response.send(responseMessage) // 3.
})

app.listen(port, () => {
    console.log(`Server is ON and running on port ${port}`)
})
```

> 1. we are registering a route using our `app` variable. The route will be using the `GET` verb. The first parameters is the `path` to this route, the literal `URL`. In this case, will be at the root, the first one, `'/'`. In this case, we will access it by:  
`localhost:3000`
> 2. We are creating a reponse object to send when this route is accessed. In ths case, will be a simple object with a `message` inside it, the value `'Hello!'`. In the future, it will be probably our `Text`s and more complex stuff.
> 3. In the end, we will send our variable to the user with method `.send()` with the wanted value inside.

### Organizing our files and project
Lets start building a real structure. We can start by creating a folder inside `db` that will hold all our `models`. At this moment, we will have only one, that is our `Text`.
So, we will have:
> src/db/models/text.js
```javascript
const moongose = require('mongoose')

const Text = moongose.model('Text', {
    title: {
        type: String,
        trim: true
    },
    text: {
        type: String,
        required: [true, 'Please, insert some Text!'],
        trim: true
    },
    size: {
        type: Number,
        required: true,
        min: [600, 'Text size must be equal or bigger than 600'],
        max: [1000, 'Text size must be equal or less than 1000!']
    }
})

module.exports = Text
```

And now our `src/db/mongoose.js` will be a little bit more clean, like this:
```javascript
const moongose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/database-texts'

moongose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
```
> The ideia is that, will file will only be the connection, and if we want to create other `models`, we should do it inside the `models` folder. 

We can also organize our `index.js` file:

```javascript
const express = require('express')
const cors = require('cors')
const Text = require('./db/models/text') // 1.
require('./db/mongoose') // 2.

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
  origin: 'http://localhost:8080'
}))

app.use(express.json()) // 3.

app.get('/', (request, response) => { 
  let responseMessage = {
    message: 'Hello!'
  }
  return response.send(responseMessage) 
})

app.listen(port, () => {
  console.log(`Server is ON and running on port ${port}`)
})
``` 
> 1. First, we are importing our `Text` model that we created with mongoose and is in the `text.js` file.
> 2. We are also importing the Database file `mongoose`, but we are not saving it in any variable. We are just importing it to make sure the connection inside it is created. Remeber that we will manipulate our database only using our `models`, like the `Text` one that we imported.
> 3. We will display and receive a lot of `json`s during the creation of the API. So, just to make sure everything works well, we will tell express to use it. 

### Creating a real GET route
Now, we will create a route that will display all our `Text`s. This will be really easy:
```javascript
app.get('/texts', (request, response) => { // 1.

  Text.find().then(result => { // 2.
    return response.send({ texts: result}) // 3.
  })

})
```
> 1. We changed the route to math the name of the model that we are interacting, so things make a little more sense. IN this case, we will use:  
`GET "localhost:3000/texts"`
> 2. We are using the method `.find()` to get all `Text`s in the database. It will return a list of it.
> 3. We are sending back to the person that went to that endpoints a object like this:  
> ```javascript
> {
>   text: [
>     {
>       id: 1,
>       title: 'Title 1',
>       text: 'Text 1...'
>     },
>     {
>       id: 2,
>       title: 'Title 2',
>       text: 'Text 2...'
>     } ...
>   ]
> }
> ```

#### Refactoring the code
We can actually make this code look a little bit more easy and clena, by using what we learned before with `async/await`. Lets make it:
```javascript
app.get('/texts', async (request, response) => { // 1.
  let listOfTexts = await Text.find() // 2.
  return response.send({ text: listOfTexts })
})
```
> 1. Now, we added the `async` keyword in front the function that will be called when a user enters in the `/texts` endpoint. After that, we are able to use `await` instead of calling `.then()` eeru time.
> 2. Now, we can remove the `.then()` and just `await` for the database finish finding all `Text`s. After that, we just send it back as we did before.

## Route to CREATE a Text
The most important part is to be able to create a new Text. This is really easy and we can do it as follow:
```javascript
app.post('/texts', async (request, response) => { // 1.
  let newText = request.body // 2.
  try {
    let myText = new Text({ // 3.
      title: newText.title,
      text: newText.text,
      size: newText.text.split(' ').length
    })
    let savedText = await myText.save() // 4.
    return response.send(savedText) // 5.
  } catch (error) {
    return response.status(400).send({ error: `An error occurred: ${error}` }) // 6.
  }
})
```
> 1. Now we will use the POST verb to create a new `Text`. 
> 2. We will get the new `Text` information from the `request body` and save it into `newText`
> 3. We will use the data received to create a `new Text object`.
> 4. Now, we can save it and also verfy if there are any errors. If there are errors, the `catch` clause will return an error message to the one who send the request.
> 5. We will send the created `Text` to who send the request.
> 6. We will return the errors and a `code 400` to notify that it was a `Bad Request`.


## Route to GET one Text
The ideia is to make available a route that users can use to find a single `Text` by its ID. We can do it my using some stuff that we learned about our database, like the method `.findById(id)`.

```javascript
app.get('/texts/:id', async (request, response) => { // 1.
  let id = request.params.id // 2.
  try {
    let foundText = await Text.findById(id) // 3.
    return response.send(foundText) // 4.
  } catch (error) { // 5.
    return response.status(404).send({ error: `There are no Text with the given id: ${id}` }) // 6.
  }
})
```
> 1. We are creating a route with the following path `/texts/${someId}`, that will be id given by the user/Front-end during the request.
> 2. We are getting the id that was used in the url. For example, if the following link was used: `https://localhost/texts/2fF34a` the value inside our `id` variable would be `'2fF34a'`    
> 3. We are using the method that we learned before, `.findById(id)` and we are using it with the id that we received in the request.   
> 4. If everything was OK, we will send back the `Text` that we found in our database to the person that made the request. 
> 5. Its possible to occurr an `error`, like request having an `ID` that does not exist in our database. So, if this happens we will do something.
> 6. It is a good idea to advise who send the request, with a message and the correct status. 

## Route to UPDATE a Text
It is a good idea have a route to edit information about a previously created Text. Maybe during the creation, the client send some wong information or something else. We can do it by the following:

```javascript
app.put('/texts/:id', async (request, response) => { // 1.
  let id = request.params.id // 2.
  let newTextInfo = request.body // 3.
  try {
    let foundText = await Text.findById(id) // 4.
    foundText.title = newTextInfo.title // 5. 
    foundText.text = newTextInfo.text   // 5.
    foundText.size = newTextInfo.text.split(' ').length // 5.

    let updatedText = await foundText.save() // 6.
    return response.send(updatedText) // 7.
  } catch (error) { 
    return response.status(404).send({ error: `An error occurred: ${error}` }) // 8.
  }
})
```

> 1. When we want to update information, we use the PUT verb. 
> 2. We are getting the `ID` from the URL.
> 3. We ARE getting the request body with the new information that will be used to update the `Text` with the `ID` from the url. The body will be really similar to our `Text` model:
> ```javascript
> PUT: `http://localhost:3000/texts/12h312nj`
>
> BODY:
> {
>   title: 'My new title',
>   text: 'A really long text ...'
> }
> ```
> 4. We will try to find the `Text` that the request wants to update. This part is really similar to the [GET Route](#Route-to-GET-one-Text)
> 5. We are now setting the new information in the `Text` that we found. This is really similar to what we learned in [this part: Updating data](#Updating-data)
> 6. Now that our `Text` object has the new information, we will save it. 
> 7. We are now returning the updated version of the `Text`, so who requested knows everything was fine and the `Text` was updated.
> 8. If some error occurred, we will send a message saying what wrong happened.

## Route to DELETE a Text
The idea now is to delete something that we do not want anymore. The process will be really easy as follow:
```javascript
app.delete('/texts/:id', async (request, response) => {
  let id = request.params.id 
  try {
    let deleted = await Text.findByIdAndDelete(id) // 1.
    return response.send({message: `The Text with title: ${deleted.title} and id: ${deleted.id} was successfully deleted!`}) // 2. 
  } catch (error) {
    return response.status(404).send({ error: `There are no Text with the given id: ${id}` })
  }
})
```
> 1. We will try to find the and delete the `Text` that the request wants to delete.
> 2. It is a good ideia to inform in the response that the `Text` was deleted successfully.
