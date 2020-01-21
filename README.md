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
4. Install the `mongodb` library so we can use it with code: `npm i mongodb@3.1.10`

## Learnig how to perform CRUD using `MongoDB`

CRUD is a acronym for `CREATE`, `READ`, `UPDATE`, `DELETE`. These are the basic operations that we are going to perform on our Database.  
We need to be able to `CREATE` information and insert it on our database. After that, maybe we want to `READ` it and display to our users. If the users want to change it, we need to be able to `UPDATE` our database information, and if they do not like it, we will need to `DELETE` it.

1. Open the project with a code editor:  
`cd myProjectName && code .`
2. Create a file named `mongodb.js` for first tests and configuration
3. Add the content for initial configuration:
4. To run, just open the terminal and type `node mongodb.js`
```javascript
const { MongoClient, ObjectID } = require('mongodb')// Importing the library to use mongoDB

const connectionURL = 'mongodb://127.0.0.1:27017' // The URL of our running database
const databaseName = 'api-texts' // The name we want to give to it

// Calling the connect function using the URL
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    // Just verify for error (could be a wrong URL, for example)
    return console.log('Unable to connect to database!')
  }
  console.log('Connected to database!')

  // Create our database using the name and a variable so we can use it
  const db = client.db(databaseName)


  let myTitle = 'History of super hero!'
  let myText = 'My great text about heroes... Really Long... '
  let sizeOfText = myText.split(' ').length 
  db.collection(`texts`).insertOne({
    title: myTitle,
    text: myText,
    size: sizeOfText
  })
})
``` 

### **Updating data**
Update information is a really important part, and it is really easy to do it. We can do it by using some like this:
```javascript
// Using the .updateOne method and saying that you want to update the object with id = ABC
// After that, you can use $set: {field: 'newValue'} to say what field to update and the new value  
db.collection(`texts`)
  .updateOne({_id: new ObjectID("5e26563b96643c21d87e7d08")}, {
    $set: {
      title: 'My new title'
    }
  })
})
```
Now, if you verify in your Database using compass, or by using code with `.findOne()`, you will see that the `title` changed from `History of super hero!` to `My new title`.

### **Delete data**
It is also a good ideia know how to remove data if it is not necessary or our user wants to, and we can do it like this:

```javascript
// In this case, we are deleting one single object by it's ID
// (Using the ID is a secure way)
db.collection(`texts`)
  .deleteOne({ _id: new ObjectID("5e26563b96643c21d87e7d08") })
```


## Using a easier tool to manipulate the Database: Mongoose!
1. Install the `Mongoose` library so we can use it with code: `npm i mongoose@5.3.16`
```javascript
const moongose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/database-texts' 

moongose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true // Being sure to create our indexes and IDs
})

const Text = moongose.model('Text', {
    title: {
        type: String,
    },
    text: {
        type: String
    },
    size: {
        type: Number
    }
})

let myTitle = 'History of super hero!'
let myText = 'My great text about heroes... Really Long...'
let sizeOfText = myText.split(' ').length 

const saved = new Text({
    title: myTitle,
    text: myText,
    size: sizeOfText
})

saved.save()
```