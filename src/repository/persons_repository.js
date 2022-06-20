const { PersonModel } = require('../infrastructure/database');
const { getID } = require('../utils/utils');

const filters = { _id: 0, name: 1, link: 1, friends: 1, email: 1, id: 1 }

const PersonRepository = {
    async create(data) {
        try {
            data["id"] = await getID(PersonRepository)
            console.log(data.id)
            if (data.password !== data.confirm)
                return { message: "Senhas diferentes" }
            const model = new PersonModel(data);
            console.log(model)
            const { _id, __v, ...response } = (await model.save()).toObject()
            return response
        } catch (e) {
            return e;
        }
    },

    async login(data) {
        try {
            const model = await PersonModel.findOne({ "email": data.email })
            if (model) {
                if (model.password === data.password) {
                    return { message: "Logado", model }
                }
                return "Senha errada"
            }
            return "Email não encontrado"
        } catch (e) {
            return e;
        }
    },

    async befriend(data) {
        try {
            const model = await PersonModel.findById(data.session)
            const friend = await PersonModel.findOne({ id: data.person_id })
            if (!friend)
                return { message: "Pessoa não encontrada" }
            if (model.friends.includes(friend._id))
                return { message: "Amigo já adicionado", friend }
            console.log(model.friends.includes(friend))
            console.log(model)
            const { _id, __v, ...response } = (await model.save()).toObject()
            return response
        } catch (e) {
            return e;
        }
    },

    async unfriend(data) {
        try {
            data["id"] = await getID(PersonRepository)
            const model = new PersonModel(data);
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
            const model = await PersonModel.findOneAndUpdate(filter, data, options).exec();
            if (model === null) return []
            const { _id, __v, ...response } = model.toObject()
            return response;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const object = await PersonModel.findOne({ id: data.id }, filters).exec();
            const result = await PersonModel.deleteOne({ id: data.id }).exec();
            return { object, deleted: result.acknowledged };
        } catch (error) {
            return error;
        }
    },

    async deleteAll(data) {
        try {
            const objects = await PersonModel.find({}, filters).exec()
            const result = await PersonModel.deleteMany().exec();
            return { objects, deleted: result.acknowledged, count: result.deletedCount };
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await PersonModel.find({}, filters).exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByFilter(data) {
        try {
            let result
            switch (data.filter) {
                case "name":
                    result = await PersonModel.find({ name: data.value }, filters).exec();
                    break;
                case "email":
                    result = await PersonModel.find({ genre: data.value }, filters).exec();
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

module.exports = PersonRepository;