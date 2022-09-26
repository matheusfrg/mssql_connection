const knex = require("../database")

console.log(knex)

module.exports = {
    async index(req, res, next) {
        try {
            const results = await knex('emp_vaga').select('*').limit(10)

            return res.json(results)
        } catch (error) {
            next(error)
        }
    }
}