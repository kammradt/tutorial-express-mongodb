const { MongoClient, ObjectID } = require('mongodb')
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
  let myText = 'My great text about heroes... Really Long...'
  let sizeOfText = myText.split(' ').length 
  db.collection(`texts`).insertOne({
    title: myTitle,
    text: myText,
    size: sizeOfText
  })
})