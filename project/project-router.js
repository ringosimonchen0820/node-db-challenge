const express = require('express');

const P = require('./project-model.js');

const router = express.Router();


router.post('/resource', (req, res) => {
   const resourceData = req.body
   P.addResource(resourceData)
   .then(resource => {
       res.status(201).json(resource)
   }) .catch(err => {
    res.status(500).json({ message: 'Failed to add resource' });
  });
});

router.get('/resource', (req, res) => {
   P.getResource()
   .then(resources => {
       res.json(resources)
   })
   .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
  });

  router.post('/', (req, res) => {
    const projectData = req.body

    P.addProject(projectData)
    .then(project => {
        res.status(201).json(project)
    }) .catch(err => {
     res.status(500).json({ message: 'Failed to add project' });
   });
 });
 
 router.get('/', (req, res) => {
    P.getProject()
    .then(project => {
        res.json(project)
    })
    .catch(err => {
     res.status(500).json({ message: 'Failed to get project' });
   });
   });

   router.post('/task', (req, res) => {
    const taskData = req.body

    P.addTask(taskData)
    .then(task => {
        res.status(201).json(task)
    }) .catch(err => {
     res.status(500).json({ message: 'Failed to add task' });
   });
 });
 
 router.get('/:id/task', (req, res) => {
     const id = req.params.id
    P.getTask(id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
     res.status(500).json({ message: 'Failed to get task' });
   });
   });
  

module.exports = router;