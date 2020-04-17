const db = require("./dbConfig.js")

module.exports = {
    getResource,
    addResource,
    getProject,
    addProject,
    getTask,
    addTask,
}


function getResource(){
    return db("resource")
}


function addResource(resource){
    return db("resource").insert(resource, "id")
}

function getProject(){
    return db("project")
}

function addProject(project){
    return db("project").insert(project, "id")
}

function getTask(id){
    return db("project")
    .join("task","task.project_id","project.id")
    .select("*")
    .where({'task.project_id': id})
}

function addTask(task){
    return db("task").insert(task, "id")
}