const Constants = require('../utils/Constants');
const PersonsRepository = require('../repository/persons_repository');


const Persons = {
    async create(data) {
        try {
            const response = await PersonsRepository.create(data);
            console.log(response)
            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async login(data) {
        try {
            const response = await PersonsRepository.login(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async befriend(data) {
        try {
            const response = await PersonsRepository.befriend(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async unfriend(data) {
        try {
            const response = await PersonsRepository.unfriend(data);

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
            const response = await PersonsRepository.update(data);

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

            const response = await PersonsRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByFilter(data) {
        try {
            const response = await PersonsRepository.getByFilter(data);
            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await PersonsRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },

    async deleteAll() {
        try {
            const response = await PersonsRepository.deleteAll();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Persons;