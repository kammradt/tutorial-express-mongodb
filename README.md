# :sparkles: **Welcome to our Express & MongoDB friendly tutorial! **

|Summary                                                                                    | 
|-                                                                                          | 
| [Who?](#who)                                                                              | 
| [What? *What will we build?*](#what-what-will-we-build)                                   |
| [Why? *What is our objective?*](#why-what-is-our-objective)                               |
| [How? *Are are the tools that we will use?*](#how-what-are-the-tools-that-we-will-use)    | 
| [Let's start](#let's-start)

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

## Let's start

The tutorial was divided into some sections. You can verify everything in the table below:

| :speech_balloon: **Introduction**                                     |
| -                                                                 |
| [What is a Database?](#what-is-a-database)                        |           
| [What is an API?](#what-is-an-api)                                |   
| [HTTP Verbs](#http-verbs)                                         |
| [Installing MongoDB on Ubuntu](#installing-mongodb-on-ubuntu)     | 
| [Installing a client for Mongo](#installing-a-client-for-mongo)   | 
| | 
| :card_file_box: **Creating the Project and interacting with Database**                      | 
| |                                                                                           |
| [Creating a project](#creating-a-project)                                                   |
| [Learning how to perform CRUD with Mongoose](#learning-how-to-perform-crud-with-mongoose)   | 
| [What is **CRUD**?](#what-is-crud)                                                          |
| [**C**reating the basic file](#creating-the-basic-file)                                     | 
| [Adding rules to Text model](#adding-rules-to-text-model)                                   |
| [**R**eading data](#reading-data)                                                           | 
| [**U**pdating data](#updating-data)                                                         |
| [**D**elete data](#delete-data)                                                             |
| |
| :recycle: **Creating the CRUD**                                       |
| |
| [Creating the basic API file](#Creating-the-basic-API-file)           | 
| [Creating routes](#Creating-routes)                                   |
| [Creating a GET route](#Creating-a-GET-route)                         |
| [Organizing our files and project](#Organizing-our-files-and-project) |
| [Creating a real GET route](#Creating-a-real-GET-route)               |
| [Refactoring the code](#Refactoring-the-code)                         |
| [Route to CREATE a Text](#Route-to-CREATE-a-Text)                     |
| [Route to GET one Text](#Route-to-GET-one-Text)                       |
| [Route to UPDATE a Text](#Route-to-UPDATE-a-Text)                     |
| [Route to DELETE a Text](#Route-to-DELETE-a-Text)                     |
| [Route to GET a random Text](#Route-to-GET-a-random-Text)             |
| | 
| :mailbox_with_mail: **Sending emails using SendGrid**                              |
| | 
| [Introduction about SendGrid](#Introduction-about-SendGrid)                        |
| [Adding SendGrid library to the project](#Adding-SendGrid-library-to-the-project)  |
| [Creating custom email templates](#Creating-custom-email-templates)                |
| [Sending custom email templates](#Sending-custom-email-templates)                  |
| |
| :art: Refactoring and Best practices                         |
| |
| [Splitting routes](#Splitting-routes)                        |
| [Using environment variables](#Using-environment-variables)  |
| |
