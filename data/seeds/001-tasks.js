

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: "desc 1", project_id: 1, completed:false},
        {id: 2, description: "desc 2", project_id: 2, completed:false},
        {id: 3, description: "desc 3", project_id: 3, completed:false}
      ]);
    });
};
