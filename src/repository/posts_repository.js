const { PostModel } = require('../infrastructure/database');

const filters = { _id: 0, name: 1, year: 1, bandName: 1, genre: 1, albumName: 1, id: 1 }

const PostRepository = {
    async create(data) {
        try {
            data["id"] = await getID(PostRepository)
            const model = new PostModel(data);
            const { _id, __v, ...response } = (await model.save()).toObject()
            return response
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const options = { new: true };
            const filter = { id: data.id };
            const model = await PostModel.findOneAndUpdate(filter, data, options).exec();
            if (model === null) return []
            const { _id, __v, ...response } = model.toObject()
            return response;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const object = await PostModel.findOne({ id: data.id }, filters).exec();
            const result = await PostModel.deleteOne({ id: data.id }).exec();
            return { object, deleted: result.acknowledged };
        } catch (error) {
            return error;
        }
    },

    async deleteAll(data) {
        try {
            const objects = await PostModel.find({}, filters).exec()
            const result = await PostModel.deleteMany().exec();
            return { objects, deleted: result.acknowledged, count: result.deletedCount };
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await PostModel.find({}, filters).exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByFilter(data) {
        try {
            let result
            switch (data.filter) {
                case "bandName":
                    result = await PostModel.findOne({ bandName: data.value }, filters).exec();
                    break;
                case "name":
                    result = await PostModel.find({ name: data.value }, filters).exec();
                    break;
                case "genre":
                    result = await PostModel.find({ genre: data.value }, filters).exec();
                    break;
                case "albumName":
                    result = await PostModel.find({ albumName: data.value }, filters).exec();
                    break;
                case "year":
                    result = await PostModel.find({ year: data.value }, filters).exec();
                    break;
                default:
                    result = "Filter does not exist"
            }
            return result;
        } catch (e) {
            return e;
        }
    },
};

module.exports = PostRepository;