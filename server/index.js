//1. use npm i to install express

//2. declare a variable called express use require to import the express library

//3. declare a variable called app and set it to express invoked

//4. declare a variable called PORT and set it 5001

//5. use app.listen to console log the port number the server is running on

//6. in the terminal use the command " nodemon server/index.js" to run your server. Your console log of the port number should appear!

//7. The id and cart viarables will work a simple makeshift database for the project, where "id" will work as a primary key and cart will be value:key pair data. We will make our API endpoints below here. There are the functions where users will be able to CREATE, READ, UPDATE, & DESTROY data from our "database" (CRUD!)

let id = 4

let cart =[{
    name:"TV",
    item_id:1,
    price: 200,
    quanity:1
},
{name:"Mahogany Desk",
    item_id:2,
    price:300,
    quanity:1
},
{name:"Orange Hat",
    item_id:3,
    price:50,
    quanity:1}]

//8. start with a simple app.get() function for a READ. app.get() is used for displaying data. The first parameter of the app.get is the URL for that endpoint, the second is where the req,res function will go.

app.get("/url here",(req,res)=>{
//  req.body.userInputHere
res.send("this is what will be sent back to user")
})

// 9. Make a get endpoint funciton that send the cart array to the user

app.get('/cart',(req,res)=>{
    //code here
    })

// 10. make an app.post endpoint function to allow a user to send a cart object and add it to the cart array. set the id of the users cart object to the id variable we have on the server so it will always stay unique and increment the id at the end of the function.



// 11. use app.put to allow the user to edit the quanity of one of the cart items. Use the findIndex method on the cart array to find the index of the item that is the item_id of the id the user put in the params.

// 12. use app.delete to allow the user to delete an item from the cart by putting the item_id of the item they want to delete in the params of the end point url. Use the findIndex again. Also include an error message if the user put in an ID that doenst match any in the cart.


//   ---   TIPS   ---
// the req.params is always a string. You can use the unary plus operator(+) which if put before a string will convert it to an int(if the string is a number)
let num ="50"
return +num
// solution = 50 (now integer instead of string)
