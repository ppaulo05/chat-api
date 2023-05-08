exports.get = async(req,res) => {

    return{"status":"OK", "controller":"Sala"};

}

const salaModel = require('../models/salaModels');

exports.get = async () => {
    
    return await salaModel.listarSalas();
}

