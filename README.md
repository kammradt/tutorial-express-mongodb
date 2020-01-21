## What is an API?

## what is a Database?


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

## Learnig how to perform CRUD using `MongoDB`

CRUD is a acronym for `CREATE`, `READ`, `UPDATE`, `DELETE`. These are the basic operations that we are going to perform on our Database.  
We need to be able to `CREATE` information and insert it on our database. After that, maybe we want to `READ` it and display to our users. If the users want to change it, we need to be able to `UPDATE` our database information, and if they do not like it, we will need to `DELETE` it.

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
        type: String
    },
    size: {
        type: Number
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
> 4. Just creating the variables that we will use to create a Text object and save in our Database. In a real application, problably a user would give this data to us.
> 5. Creating a Text object using our variables.
> 6. Now we are calling the method `.save()` on your **Text** object that were created by using our **Model**. Note that this is not a simple object, is a object from the **Text** model.



### **Updating data**
Update information is a really important part, and it is really easy to do it. We can do it by using some like this:
```javascript

```
Now, if you verify in your Database using compass, or by using code with `.findOne()`, you will see that the `title` changed from `History of super hero!` to `My new title`.

### **Delete data**
It is also a good ideia know how to remove data if it is not necessary or our user wants to, and we can do it like this:

```javascript
```

