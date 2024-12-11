import { Schema, model, models } from 'mongoose';

const BlogSchema = Schema(
    {
        title: {
            type: String,
            required: [true, "Please Add Title"]
        },
        titleImageURL: {
            type: String
        },
        titleImageId: {
            type: String
        },
        content: {
            type: String,
            require: [true, "Please Enter Content"],
        },
    }, 
    {
        timestamps: { 
            createdAt: true, 
            updatedAt: false 
        }
    }
)

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog