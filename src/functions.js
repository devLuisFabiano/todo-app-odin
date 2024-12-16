export function CreateObjProjects(){

    let ProjectsArr = [];

    const pushProject = (project) => {
        ProjectsArr.push(project);
    }
   
    return {ProjectsArr, pushProject};
}

export function project(name){
    let todoArr = []
    const pushTodo = (todo1) => {
        todoArr.push(todo1);
    }

    return {todoArr,name,pushTodo}
};

export function todoa(title,description,dueDate,priority){

    return {title,description,dueDate,priority};
};

export const CreateProject = function(name,parent){
    const project1 = project(name);
    parent.pushProject(project1);

}

export const CreateTodo = function(title,description,dueDate,priority,parent){
    const todo1 = todoa(title,description,dueDate,priority);
    parent.pushTodo(todo1);

}

