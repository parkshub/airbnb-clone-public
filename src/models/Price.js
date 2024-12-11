import { Schema, model, models } from 'mongoose';

const PriceSchema = Schema(
    {
        Ethereal: {
            type: Number,
        },
        Biophilia: {
            type: Number
        },
        Bohemia: {
            type: Number
        },
        Dreamy: {
            type: Number,
        },
        Sublime: {
            type: Number,
        },
        Hermitage: {
            type: Number,
        }
    }
)

const Price = models.Price || model("Price", PriceSchema);

export default Price