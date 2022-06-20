const Comments = require('../application/comments_service');
const Utils = require('../utils/utils');

const route = '/comments';

module.exports = (app) => {
    app.post(`${route}/create`, async(req, res) => {
        const response = await Comments.create(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.put(`${route}/update`, async(req, res) => {
        const response = await Comments.update(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.delete(`${route}/delete`, async(req, res) => {
        const response = await Comments.delete(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.delete(`${route}/deleteAll`, async(req, res) => {
        const response = await Comments.deleteAll();
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.get(`${route}/list`, async(req, res) => {
        const response = await Comments.list();
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.get(`${route}/listMusic`, async(req, res) => {
        const response = await Comments.listByFilter(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response || "Objeto não encontrado");
    });
};