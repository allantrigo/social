const Persons = require('../application/persons_service');
const Utils = require('../utils/utils');

const route = '/persons';

module.exports = (app) => {
    app.post(`${route}/create`, async(req, res) => {
        const response = await Persons.create(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.post(`${route}/login`, async(req, res) => {
        const response = await Persons.login(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.post(`${route}/befriend`, async(req, res) => {
        const response = await Persons.befriend(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.post(`${route}/unfriend`, async(req, res) => {
        const response = await Persons.unfriend(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.put(`${route}/update`, async(req, res) => {
        const response = await Persons.update(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.delete(`${route}/delete`, async(req, res) => {
        const response = await Persons.delete(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.delete(`${route}/deleteAll`, async(req, res) => {
        const response = await Persons.deleteAll();
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.get(`${route}/listFilter`, async(req, res) => {
        const response = await Persons.listByFilter(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response || "Objeto não encontrado");
    });
};