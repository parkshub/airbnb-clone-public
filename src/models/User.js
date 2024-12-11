// const mongoose = require("mongoose")
import { Schema, model, models } from 'mongoose';

const UserSchema = Schema(
    {
        name: {
            type: String,
            require: [true, "Please enter username"],
        },
        email: {
            type: String,
            required: [true, "Please add password"]
        },
    }
)

const User = models.User || model("User", UserSchema);

export default User