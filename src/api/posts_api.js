const Posts = require('../application/posts_service');
const Utils = require('../utils/utils');

const route = '/posts';

module.exports = (app) => {
    app.post(`${route}/create`, async(req, res) => {
        const response = await Posts.create(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.put(`${route}/update`, async(req, res) => {
        const response = await Posts.update(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.delete(`${route}/delete`, async(req, res) => {
        const response = await Posts.delete(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.delete(`${route}/deleteAll`, async(req, res) => {
        const response = await Posts.deleteAll();
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.get(`${route}/list`, async(req, res) => {
        const response = await Posts.list();
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.get(`${route}/listMusic`, async(req, res) => {
        const response = await Posts.listByFilter(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response || "Objeto não encontrado");
    });
};