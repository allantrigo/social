const Constants = require('../utils/Constants');
const CommentsRepository = require('../repository/comments_repository');

const Comments = {
    async create(data) {
        try {
            const response = await CommentsRepository.create(data);

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
            const response = await CommentsRepository.update(data);

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

            const response = await CommentsRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByFilter(data) {
        try {
            const response = await CommentsRepository.getByFilter(data);
            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await CommentsRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },

    async deleteAll() {
        try {
            const response = await CommentsRepository.deleteAll();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Comments;