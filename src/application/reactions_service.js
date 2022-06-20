const Constants = require('../utils/Constants');
const ReactionsRepository = require('../repository/reactions_repository');


const Reactions = {
    async create(data) {
        try {
            const response = await ReactionsRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const response = await ReactionsRepository.update(data);

            if (response === []) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {

            const response = await ReactionsRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByFilter(data) {
        try {
            const response = await ReactionsRepository.getByFilter(data);
            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await ReactionsRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },

    async deleteAll() {
        try {
            const response = await ReactionsRepository.deleteAll();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Reactions;