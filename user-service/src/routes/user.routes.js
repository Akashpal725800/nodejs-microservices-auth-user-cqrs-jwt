const router = require('express').Router();
const ctrl = require('../controllers/user.controller');

router.post('/create', ctrl.createUser);
router.get('/:email', ctrl.getUserByEmail);

module.exports = router;
