const {
  Router,
} = require('express');
const Controller = require('../../controllers/all.controller');


const init = (app, data) => {
  const router = new Router();
  const controller = new Controller(data);

  app.use('/', router);

  router
      .get('/', controller.getHomePageData())
      .get('/home', controller.getHomePageData())
      .get('/categories', controller.getCategories())
      .get('/notecategories', controller.getNoteCategories())
      .get('/notes', controller.getNotes())
      .get('/note/:noteId', controller.getNoteDetails())
      .post('/createNote', controller.createNote());
};

module.exports = {
  init,
};