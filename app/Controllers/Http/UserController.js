'use strict'

const { genToken } = require('../../services/jwt')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Users = use('App/Models/Users')

class UserController {
    async Login({ request, response }){
        try{
            const verified = genToken(request.user, request.password)

        if(verified === null){
            throw error
        }

            response.status(200).send(verified)
        }catch(err){
            response.status(401).send('Falha na autenticação.')
        }
    }

    async Signin({ request, response }){

        const { first_name, last_name, alias, email, password } = request.only(['first_name', 'last_name', 'alias', 'email', 'password'])
        try{
            const user = Users.create({
                first_name: first_name,
                last_name: last_name,
                alias: alias,
                email: email,
                password: password
    
            })

            await user.save()

            response.status(201).send('Ok')
        }catch(e){
            response.status(400).send(e)
        }
        response.status(200).send(request.all().first_name)
    }
}

module.exports = UserController
