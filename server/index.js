//1. use npm i to install express

//2. declare a variable called express use require to import the express library

//3. declare a variable called app and set it to express invoked

//4. declare a variable called PORT and set it 5001

//5. use app.listen to console log the port number the server is running on

//6. in the terminal use the command " nodemon server/index.js" to run your server. Your console log of the port number should appear!

//7. The id and cart viarables will work a simple makeshift database for the project, where "id" will work as a primary key and cart will be value:key pair data. We will make our API endpoints below here. There are the functions where users will be able to CREATE, READ, UPDATE, & DESTROY data from our "database" (CRUD!)

//8. start with a simple app.get() function for a READ. app.get() is used for displaying data. The first parameter of the app.get is the URL for that endpoint, the second is where the req,res function will go.

// app.get("/url here",(req,res)=>{
//  req.body.propertyFromUserHere 
//  res.send("this is what will be sent back to user")
// }


