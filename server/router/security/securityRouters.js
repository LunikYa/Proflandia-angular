const Router = require('koa-router');
const router = Router();
const { getLessons,getProfessions,getUser,getChoosedProfessions,getQuestions,putProfession} = require('./dataController');

router.get('/lessons/:profession', getLessons);
router.get('/professions', getProfessions);
router.get('/user/:useremail', getUser);
router.get('/choosed/professions/:usermail', getChoosedProfessions);
router.get('/questions/:lessonId', getQuestions)
router.put('/profession', putProfession)
// router.put('/choosed/professions/:usermail', putChoosedProfessions);

module.exports = router;