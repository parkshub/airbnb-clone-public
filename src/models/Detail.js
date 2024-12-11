import { Schema, model, models } from 'mongoose';
import mongoose from 'mongoose';

const InnerDetailSchema = Schema(
    {
        price: {
            type: Number
        },
        rating: {
            type: Number
        },
        reviews: {
            type: Number
        },
        desc: {
            type: String
        }
    },
    { _id : false }
)

const DetailSchema = Schema(
    {
        Ethereal: {
            // price: 123, rating: 5, reviews: 500, desc: 'cool place'
            type: InnerDetailSchema
        },
        
        Biophilia: {
            type: InnerDetailSchema
            // InnerDetailSchema
        },

        Bohemia: {
            // type: {InnerDetailSchema}
            type: InnerDetailSchema
            // type: mongoose.Schema.Types.Mixed,
        },
        Dreamy: {
            // type: [InnerDetailSchema]
            type: InnerDetailSchema
            // type: mongoose.Schema.Types.Mixed,
        },
        Sublime: {
            // InnerDetailSchema
            type: InnerDetailSchema
        },

        Hermitage: {
            type: InnerDetailSchema
        }
    }
)

const Detail = models.Detail || model("Detail", DetailSchema);

export default Detail