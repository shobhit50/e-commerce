const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const cartSchema = new Schema({
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
});



module.exports = mongoose.model("Cart", cartSchema);