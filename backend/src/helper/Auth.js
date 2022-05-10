const Auth = {}
const jwt = require('jsonwebtoken')

/**
 * 
 * @param {#} req Nos provee los requisitos para el codigo
 * @param {#} res Da la respuesta del algoritmo
 * @param {#} next Da paso al siguiente proceso
 * @returns El siguiente proceso
 */

Auth.verificarToken = (req,res, next) => {
    if (!req.headers.autorizacion){
        return res.json({
            mensaje: 'No estas autorizado'
        })
    }

    const token = req.headers.autorizacion
    if (token==null){        
        return res.json({
            mensaje: 'No estas autorizado'
        })
    }

    jwt.verify(token, 'Secreto',(error, resultado) => {
        if (error) {
            return res.json({
                mensaje: 'No estas autorizado'
            })            
        }
        next();
    })
}

module.exports = Auth