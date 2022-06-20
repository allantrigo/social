const Reactions = require('../application/reactions_service');
const Utils = require('../utils/utils');

const route = '/reactions';

module.exports = (app) => {
    app.post(`${route}/create`, async(req, res) => {
        const response = await Reactions.create(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.put(`${route}/update`, async(req, res) => {
        const response = await Reactions.update(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.delete(`${route}/delete`, async(req, res) => {
        const response = await Reactions.delete(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.delete(`${route}/deleteAll`, async(req, res) => {
        const response = await Reactions.deleteAll();
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.get(`${route}/list`, async(req, res) => {
        const response = await Reactions.list();
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.get(`${route}/listMusic`, async(req, res) => {
        const response = await Reactions.listByFilter(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response || "Objeto não encontrado");
    });
};