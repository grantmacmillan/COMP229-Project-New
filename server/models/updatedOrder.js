let mongoose = require('mongoose');

//Create order model class
let UpdatedOrder = mongoose.Schema({
    name: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,
    country: String,
    shipped: Boolean,
    cart: 
    {
        lines:
        [{book:
            {
                name: String,
                author: String,
                published: String,
                description: String,
                price: Number
            },
            quantity: String
        }],
        itemCount: Number,
        cartPrice: Number
    }
},
{
    collection: 'updatedOrders'
});

module.exports = mongoose.model('UpdatedOrder', UpdatedOrder);