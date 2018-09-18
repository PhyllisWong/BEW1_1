# Back-end Web Notes


## Why learn automated testing
Thur Sept 13
* Better to have a test find bugs - not users!
* Prevent imminent destruction of all things sacred
* Don't spend hours chasing bugs
* Scalability
* Manual debugging sucks
* Reusable

*Depending on who you ask, there are various forms of testing. For our purposes we will rely on the MVC pattern.*

1. Unit Testing (testing Models)
1. Routes Testing (testing controllers)
1. View Testing (testing Views)

### Unit testing
Tests are very resilient and will rarely break as you make changes to your code. They provide very narrow test coverage.

### View testing
More broad, they test more parts of your code simultaneously, but they ate more brittle - meaning they can break because you made a trivial change, eg changed the HTML/CSS of your website.

### Routes testing
Making sure that business logic works. Testing the controllers. They are broad and test a lot of behavior across the model and the controller, but they are not too brittle that they break when we change something minor like the styling.

### Conceptest



## JSON objects
example <br>
{
"name" : "phyllis",
"age" : 100,
"pets" : [ {"name": "Harold", "age" : 18}, {"name" : "George", "age" : 6} ]
}<br>

### How MongoDB stores stuff
* Collections - allow us to have multiple things inside
* Documents - MongoDB assigns ._id property

### Pros
* Fast to write to
* easy to get started
* No migrations, change things up when you need to
* Schema-less, you don't need to do any work to have this flexible system
* No database constraints or rules

### Cons
* Slow to query if you have to do a lot of reads on a loop
* Slow to traverse: if you have a lot of something to search through
* There are no migrations (this is a pro and a con)
* No timeline of when you make changes
* Schemaless means you don't get relationship structures

### ODM
* Object document mapping
* Express middleware that makes is easier to interact with a MongoDB database
* It lets you create and validate attributes and create model and instance methods and many other
common OXM fetures.

### Model
* To interact with the database, we use an abstraction called a Model.
* Like a resource, you can tell if something is a model because it is single and capitalized.
* A model is like a prototype for an object because you can assign it attributes and define
static and instance methods for it.



#### Questions
* How do we associate multiple documents together?

### Challenges
1. Open the mongo shell in your terminal
1. Query what databases you have
1. Create a database called my-blog
1. Insert an article in a new articles collection with the attributes title and body
1. Query for all articles
1. Bulk insert 3 more articles
1. Query for just one article
1. Delete that article
1. Download Robomongo and look at the database you created with the mongo shell
1. Continue with the Rotten Potatoes App


Semantic routes
Routes: URL, endpoints, strings, or path

Follow conventions: make it understandable to humans

|   Memorize what URL | HTTP Verb | Action |
|---------------------|:---------:|-------:|
