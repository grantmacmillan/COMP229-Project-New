let express = require('express');
const order = require('../models/order');//not added yet
let router = express.Router();

let UpdatedOrder = require('../models/updatedOrder');
let Store = require('../models/store');
let Cart = Store.Cart;
let Book = Store.Book;

module.exports.displayUpdatedOrderList = (req, res, next) => 
{
    UpdatedOrder.find((err, updatedOrderList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.json(updatedOrderList);
        }
    });
}

module.exports.processUpdatedOrderAddPage = (req, res, next) => {
    //Serialize the cart data
    let cart = new Cart();

    //Serialize the Line Data
    for(let line of req.body.cart.lines)
    {
        let book = new Book(
            line.book._id, 
            line.book.name,
            line.book.author,
            line.book.description,
            line.book.price
        );
        let quantity = line.quantity;
        cart.lines.push({book, quantity});
    }

    cart.itemCount = req.body.cart.itemCount;
    cart.cartPrice = req.body.cart.cartPrice;

    //Create a new Order Object
    let newUpdatedOrder = UpdatedOrder({
        "name": req.body.name,
        "address": req.body.address,
        "city": req.body.city,
        "province": req.body.province,
        "postalCode": req.body.postalCode,
        "country": req.body.country,
        "shipped": req.body.shipped,
        "cart": cart 
    })

    
    //Add new Order Object to the Database
    UpdatedOrder.create(newUpdatedOrder, (err, UpdatedOrder) => 
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: "Successfully Added New Order"});
        }
    });
}

module.exports.processUpdatedOrderEditPage = (req, res, next) => {
    let id = req.params.id;

    // SERIALIZE CART DATA

    let cart = new Cart();

    // serialize the line data
    for(let line of req.body.cart.lines)
    {
        let book = new Book(
          line.book._id,
          line.book.name,
          line.book.author,
          line.book.description,
          line.book.price  
        );
        let quantity = line.quantity;
        cart.lines.push({book, quantity});
    }
    cart.itemCount = req.body.cart.itemCount;
    cart.cartPrice = req.body.cart.cartPrice;

    // Update the Order Object
    let updatedOrder = UpdatedOrder({
        "_id": id,
        "name": req.body.name,
        "address": req.body.address,
        "city": req.body.city,
        "province": req.body.province,
        "postalCode": req.body.postalCode,
        "country": req.body.country,
        "shipped": req.body.shipped,
        "cart": cart
    });

    UpdatedOrder.updateOne({_id: id}, updatedOrder, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Edited Order', order: updatedOrder});
        }
    })
}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    UpdatedOrder.deleteOne({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Deleted Order'});
        }
    });
}