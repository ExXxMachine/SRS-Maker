const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./middlewaree/authMiddleware')
const roleMiddleware = require('./middlewaree/roleMiddleware')

router.get('/kek', function (req, res) {
	res.sendfile('public/index.html')
})
router.post(
	'/registration',
	[
		check('username', 'Имя пользователя не может быть пустым').notEmpty(),
		check(
			'password',
			'Пароль не должен быть меньше 8 символов и больше 20 символов'
		).isLength({ min: 8, max: 20 }),
	],
	controller.registration
)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER']), controller.getUsers)

module.exports = router
