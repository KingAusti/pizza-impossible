const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema ({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings:
    [
        
    ],
    comments: [
        {
            type: String,
        }
    ]
});

//create the pizza model using the pizzaschema
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model
module.exports = Pizza;