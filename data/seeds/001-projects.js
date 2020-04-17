
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, project_name: 'Project1', completed:false},
        {id: 2, project_name: 'Project2', completed:false},
        {id: 3, project_name: 'Project3', completed:false}
      ]);
    });
};
