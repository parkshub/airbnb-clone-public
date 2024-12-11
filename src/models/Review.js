import { Schema, model, models } from 'mongoose';
import mongoose from 'mongoose';

const ReviewSchema = Schema(
    {
        // property: {
        //     type: String
        // },
        reviews: {
            type: [mongoose.Schema.Types.Mixed],
            default: []
        }
        // type: [mongoose.Schema.Types.Mixed],
        // default: []

        // Biophilia: {
        //     type: [mongoose.Schema.Types.Mixed],
        //     default: []
        // },
        // Bohemia: {
        //     type: [mongoose.Schema.Types.Mixed],
        //     default: []
        // },
        // Dreamy: {
        //     type: [mongoose.Schema.Types.Mixed],
        //     default: []
        // },
        // Sublime: {
        //     type: [mongoose.Schema.Types.Mixed],
        //     default: []
        // },
        // Hermitage: {
        //     type: [mongoose.Schema.Types.Mixed],
        //     default: []
        // },
    },
    {
        timestamps: { 
            createdAt: false, 
            updatedAt: true 
        }
    }
)

const Review = models.Review || model("Review", ReviewSchema);

export default Review