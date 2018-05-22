const Router = require('koa-router');
const router = Router();
const { getLessons,getProfessions,getUser,getChoosedProfessions} = require('./dataController');

router.get('/lessons/:profession', getLessons);
router.get('/professions', getProfessions);
router.get('/user/:useremail', getUser);
router.get('/choosed/professions/:usermail', getChoosedProfessions);
// router.put('/choosed/professions/:usermail', putChoosedProfessions);

module.exports = router;