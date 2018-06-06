const Router = require('koa-router');
const router = Router();
const { getLessons, getProfessions, getUser, getQuestions, putProfession, putRecomendedProfession, putLevelUp} = require('./dataController');

router.get('/lessons/:profession', getLessons);
router.get('/professions', getProfessions);
router.get('/user/:useremail', getUser);
router.get('/questions/:lessonId', getQuestions)
router.put('/profession', putProfession)
router.put('/recomended-profession', putRecomendedProfession)
router.put('/user/levelup', putLevelUp)
// router.put('/choosed/professions/:usermail', putChoosedProfessions);

module.exports = router;