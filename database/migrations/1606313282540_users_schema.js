'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments().primary(['ID']).first() //ID, ta essa chave primaria?

      table.string('first_name', 12).notNullable()
      table.string('last_name', 12).notNullable()
      table.string('alias', 80).nullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('reputation', 1).notNullable().defaultTo(1)

      //para referenciar uma tabela externa usar a criação normal da coluna seguida de .references(column).inTable(table)

      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
