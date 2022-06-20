const mongoose = require('mongoose');
require('dotenv').config()

const uri = process.env["CONNECT_STRING"];

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;
const type = ["LOVE", "LIKE", "GRRR", "UAU"]

const PersonSchema = new Schema({
    id: {
        type: Number,
        index: true,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    friends: [{ type: Schema.ObjectId, ref: 'PersonModel', unique: false, sparse: true }]
})

const ReactionSchema = new Schema({
    id: {
        type: Number,
        index: true,
        unique: true,
        required: true
    },
    owner: {
        type: PersonSchema,
        required: true,
    },
    type: {
        type: String,
        enum: type,
        required: true
    }
})

const PostSchema = new Schema({
    id: {
        type: Number,
        index: true,
        unique: true,
        required: true
    },
    owner: {
        type: PersonSchema,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    link: String,
    reactions: [{ type: Schema.ObjectId, ref: 'ReactionModel' }],
    comments: [{ type: Schema.ObjectId, ref: 'CommentModel' }]
})

const CommentSchema = new Schema({
    id: {
        type: Number,
        index: true,
        unique: true,
        required: true
    },
    owner: {
        type: PersonSchema,
        required: true,
    },
    reactions: [{ type: Schema.ObjectId, ref: 'ReactionModel' }],
    comments: [{ type: Schema.ObjectId, ref: 'CommentModel' }]
})



const PersonModel = mongoose.model('PersonModel', PersonSchema)
const PostModel = mongoose.model('PostModel', PostSchema)
const CommentModel = mongoose.model('CommentModel', CommentSchema)
const ReactionModel = mongoose.model('ReactionModel', ReactionSchema)


module.exports = {
    PersonModel,
    PostModel,
    CommentModel,
    ReactionModel
};