import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const TransactionSchema = new Schema(
    {
        buyer: {
            type: String,
            required: true,
        },
        amount: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        productIds: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "Product", // refers to the Product object
            }
        ],
    },
    { timestamps: true, toJSON: { getters: true } } // timestamps, in this object, will give us when this particular one was created and updated
)

const Transaction = mongoose.model("Transaction", TransactionSchema)
export default Transaction;