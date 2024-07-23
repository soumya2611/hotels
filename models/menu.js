const mongoose = require('mongoose');
const MenuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    price: {
        type: Number,
        required:true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required:true
    },
    is_drink: {
        type: Boolean,
        default:false,
    },
    ingredients: {
        type: [String],
        required: true,
        default: []
    },
    num_sales: {
        type: Number, 
        default:0
    }
})
const Menu = mongoose.model('Menu', MenuItemSchema);
module.exports = Menu;

// {
//     "name": "Chicken Mughlai",
//     "price": 250,
//     "taste": "spicy",
//     "is_drink": "false",
//     "ingredients": [
//         "Chicken",
//         "panner",
//         "rice"
//     ],
//     "num_sales": 5
// }