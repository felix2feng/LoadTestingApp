const db = require('../config/db');
const User = require('./UsersModel');
const Run = require('./RunsModel');
const Action = require('./ActionsModel');

db.knex.schema.hasTable('scenarios').then(exists => {
  if (!exists) {
    db.knex.schema.createTable('scenarios', scenario => {
      scenario.increments('id').primary();
      scenario.string('scenarioName', 255);
      scenario.integer('runsCount', 255);
      scenario.integer('averageResponseTime', 255);
      scenario.integer('averageActionTime', 255);
      scenario.string('targetURL', 255);
      scenario.integer('id_user', 255);
      scenario.timestamps();
    }).then(table => {
      console.log('Scenarios table has been created.', table);
    });
  }
});

const Scenario = db.Model.extend({
  tableName: 'scenarios',
  hasTimeStamps: true,
  user() {
    return this.belongsTo(User, 'id_user');
  },

  run() {
    return this.hasMany(Run);
  },

  actions() {
    return this.hasMany(Action);
  },
});

module.exports = Scenario;
