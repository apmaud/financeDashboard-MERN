import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const ProductSchema = new Schema(
    {
        price: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // want to grab the value v saved in the currency, always multiplied by 100 so divide by 100 for real value
        },
        expense: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        transactions: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "Transaction", // refers to the Transaction object
            }
        ],
    },
    { timestamps: true, toJSON: { getters: true } } // timestamps, in this object, will give us when this particular one was created and updated
)

const Product = mongoose.model("Product", ProductSchema)
export default Product;