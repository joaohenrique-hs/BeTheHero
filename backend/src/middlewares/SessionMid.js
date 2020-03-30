const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    index() {
        const middleware = celebrate({
            [Segments.BODY]: Joi.object().keys({
                email: Joi.string().required().email(),
                senha: Joi.string().required().min(5) 
            })
        })
        return (middleware)
    }
}
