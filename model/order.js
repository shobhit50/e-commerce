const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const orderSchema = new Schema({
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    total: Number,
    status: {
        type: String,
        default: "Pending",
    }
});


module.exports = mongoose.model("Order", orderSchema);