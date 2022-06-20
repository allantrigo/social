const Constants = require('../utils/Constants');
const PostsRepository = require('../repository/posts_repository');


const Posts = {
    async create(data) {
        try {
            const response = await PostsRepository.create(data);

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
            const response = await PostsRepository.update(data);

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

            const response = await PostsRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByFilter(data) {
        try {
            const response = await PostsRepository.getByFilter(data);
            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await PostsRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },

    async deleteAll() {
        try {
            const response = await PostsRepository.deleteAll();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Posts;