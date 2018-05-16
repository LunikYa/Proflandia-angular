const Router = require('koa-router');
const router = Router();
const { getLessons } = require('./dataController');

router.get('/lessons', getLessons);

module.exports = router;