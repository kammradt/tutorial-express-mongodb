# :lock: Security

| Summary                                                                                     | 
| - |
| [Introduction about security](#introduction-about-security)                                 |
| [Authentication and Authorization](#authentication-and-authorization)                       |
| [Securely encrypting data](#securely-encrypting-data)                                       |


## Introduction about security
Till now, in our endpoints we are always accepting request without asking: **Who is asking for this information**? Can this person **have access** to this endpoint? We are basically assuming that only our own front-end will call the back-end, but in real world APPs, it is a good ideia to secure the endpoints with some way of **Authentication** and **Authorization**.  
Our website could also have some king od **registration** of **Users**, and then we could verify **who** wants to access an endpoint and if that person have the **privileges** to do this action. It is also interesting to remeber that: If we have **Users**, they probably would have an *username/email* and *password*, right? How can we store the passwords in a secure way? Just like regular text or something else? Let's see **!**

## Authentication and Authorization
There is a important difference between **Authentication** and **Authorization**, and they combined and really help us during the proccess of creating a security API/APP.  

**Authentication:**
 - Wants to verify if you are who you say you are
 - Get you *username/password* and verify in the database if you exist (Probably, it would generate/create a *certificate* or *token* based on our information)  **¹**
 > 1. It is a really commom practice to generate a long **token** for a user after logged in, and it will be used after instead of re-sending the *username/password* everytime the user makes a request. Let's imagine: We have and enpoint `/login` that the users can POST with a body like `{username: 'vini', password: 123'}`.  
 > The process of authentication would be to verify if this information existis in the database, After that, we could generate and return a token like: `'2oi3hnu542!#Efcdg$%^$vdfg'` that will be a **representation** of this user.  
 > So, everytime the user makes a request to **other** endpoints, like: `'/texts', '/documents'` for example, this token would be present in the request, and then the user do not need to send everytime the credentials again! Furthermore, we still able to verify who is making the request by the given token. (`vini`, in this case).  
 > We will verify more details later, but [this documentation about JWT is really interesting](https://jwt.io/introduction/).
 
**Authorization:**
- I already know who you are (based on our *user/pass* ou token), I just want to verify if you **can do** what you are asking to do
- Will verify if a certain user can access a endpoint/webpage
- At this point, probably the API/APP has multiple **types** of users, like: Regular, Premium, VIP, Admin, etc.

## Securely encrypting data

