### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?

  RESTful routing describes a way that API routes are structured, more specifically, in a standardized way that most APIs adopt. It outlines typical use cases for each HTTP verb, from which to use when, to the naming of the actual routes, which should be done in a sensible way for a given resource or endpoint.

- What is a resource?

  A resource is some sort of object and its associated data, which can include properties and relationships to other resources, as well as methods that can operate on it. 

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

  Since a JSON API is returning JSON data for a resource instead of html, it shouldnt include rendering routes. 

- What does idempotent mean? Which HTTP verbs are idempotent?

  Idempotent means that an operation with the same data can be performed over and over again with the same results. GET, PUT/PATCH, and DELETE are all idempotent verbs. 

- What is the difference between PUT and PATCH?
  PUT updates an entire resource, whereas PATCH updates just part of a resource. 

- What is one way encryption?

  "One Way" refers to the inability for the encryption to be reversed. This is what makes it so secure 

- What is the purpose of a `salt` when hashing a password?

  It is added to the password before hashing to make the encryption even more secure. 

- What is the purpose of the Bcrypt module?

  Bcrypt is meant to do the cryptographic  hashing of a password for you, so that adding password encryption to a website is smooth and easy and secure. 
  
- What is the difference between authorization and authentication?

  `Authorization` refers to a user being allowed to see something, having the key to the lock per say. `Authentication` refers to validating that a user is who they claim to be, usually by providing username/password combos. 
