const serpApi = require('../models/serpapi')

module.exports = function(app, passport){

    app.post('/', (req, res) => {
        serpApi.cotizar(req.body, (err, data) => {      
            res.json(err ? err : data)   
        })
    })
}