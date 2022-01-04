const express = require('express')

const app = express()

const PORT = 5001

app.listen(PORT, ()=> console.log(`Its working-> RUNNING ON PORT ${PORT}`))

app.use(express.json())

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

app.get('/',(req, res)=>{
    res.status(200).send('ITS WORKING!')
})

app.get('/cart',(req,res)=>{
res.send(cart)
})

app.post('/cart',(req,res)=>{
    const cartItem = req.body
    cartItem.item_id=id
    if(!cartItem.quanity){cartItem.quanity=1}
    cart.push(cartItem)
    res.status(200).send(cart)
    id++
})

app.put('/cart/:item_id',(req,res)=>{
 const {quanity} = req.body
 const {item_id} = req.params
 console.log(quanity,item_id)

 const index = cart.findIndex((item)=>{
     return item.item_id == +item_id
    })
//  console.log(index)

 cart[index].quanity = quanity
 res.status(200).send(cart[index])

}
)

app.delete('/cart/:item_id',(req,res)=>{
    const {item_id} = req.params
    const index = cart.findIndex((item)=>{
        console.log(item.item_id,item_id)
        return item.item_id == item_id
    })
    if(index<0){
        res.status(409).send("No item in cart with that ID!")
    }
    cart.splice([index],1)
    res.status(200).send(cart)
})
