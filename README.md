
## :pencil: **Summary**

| Introduction                          | Database                                          | API |
|-                                      | -                                                 | -   |
| [What is a Database?]()                    | [Creating a project]()                       |       abcde       |
| [What is an API?]()                   | [Learning how to perform CRUD with Mongoose]()    |       abcde       |
| [Installing MongoDB on Ubuntu]()      | [What is **CRUD**?]()                             |       abcde       |
| [Installing a client for Mongo]()     | :arrow_forward: [**C**reating the basic file]()   |       abcde       |
|                                       | :arrow_forward: [Adding rules to Text model]()    |       abcde       |
|                                       | :arrow_forward: [**R**eading data]()              |       abcde       |
|                                       | :arrow_forward: [**U**pdating data]()             |       abcde       |
|                                       | :arrow_forward: [**D**elete data]()               |       abcde       |


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

1. Go to [this link](https://www.mongodb.com/download-center/compass)
2. Select your OS version
3. Click on `Download`
4. Click on the `.deb` file to install  


## Creating a project
1. Create a folder for it: `mkdir myProjectName`
2. CD into it: `cd myProjectName`
3. Initialize it: `npm init -y`
4. Install the `mongodb` library so we can use it with code: `npm i mongoose@5.3.16`

## Learning how to perform CRUD with Mongoose

### **What is CRUD**?
CRUD is a acronym for `CREATE`, `READ`, `UPDATE`, `DELETE`. These are the basic operations that we are going to perform on our Database.  
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
> 1. This URL is created by using the URL from the database (`mongodb://127.0.0.1:27017`) and the name that we want to give to our database (`database-texts`).
> 2. Just to make sure that our Database will create the correct IDs and Indexes.
> 3. Now we are **defining** a **Model** called Text. So, every time that we need to save a new Text, it will follow the same pattern and fields. This will be really useful for maintaining and organizing our Database. It is called Model because it is literally a Model that will be followed when we want to create a new **Text**. The appeareance is really similar to a Javascript Object or a C Struct, for example.  
> As an example of some rules, we are saying that the **text** and **size** are required, but the title is optional.
> 4. Just creating the variables that we will use to create a Text object and save in our Database. In a real application, problably a user would give this data to us.
> 5. Creating a Text object using our variables.
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
    min: [600, 'Size must be equal or bigger than 600'], // 2.
    max: [1000, 'Size must be equal or less than 1000!']  // 2.
  }
})
```
> 1. The trim property will remove extra spaces from our String. For example, if a user is trying to save a title like `'  My title '`, it will actually be saved as `'My Text'`.
> 2.  `min` and `max` will help us control the size. For example, remember that texts have a size rule? So we can apply it here and guarantee that all our saved texts have the minimum and maximum size. 

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
> 1. Now we are verifying if our object was successfully saved on our database. If everything was fine, we will receive a `saved` object that is a `Text` object with an `ID` and same fields that we give to it previously. 
> 2. This will show our `saved` object.
> 3. Fro this `saved` object, we are getting the ID that the database generated and saving it on `idOfSavedText`.
> 4. This is the function that does the job of searching a object by id: `Text.findById(...)` and we agora gonna use it to find the object that we saved some seconds ago.
> 5. If everything was fine, we will receibe the same object as we had before with `saved`.
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
> 2. We will call the method `findByIdAndDelete(id)` and this method will delete the object and also return a copy of it. (But the object is deleted!!! It is just a copy to display a last information of it)
> 3. If we try to find the object that we just deleted by it's `ID`, it will return a `null`, because it was previously deleted.
