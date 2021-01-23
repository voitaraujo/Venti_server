const Database = use('Database')
const jwt = require('jsonwebtoken')
const Env = use('Env')

exports.genToken = async (user, password) => {
    try{

    }catch(err){
        return null
    }
}

exports.seeToken = async (token) => {
    try{
        const decrypt = jwt.verify(token, Env.get('APP_KEY'))

        return decrypt
    }catch(err){
        return null
    }
}