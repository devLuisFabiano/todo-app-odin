export function CreateObjProjects(){

    let ProjectsArr = [];

    const pushProject = (project) => {
        ProjectsArr.push(project);
    }
   
    return {ProjectsArr, pushProject};
}

export function project(name){
    let todoArr = []
    const pushTodo = (todo) => {
        todoArr.push(todo);
    }

    return {todoArr,name,pushTodo}
};

export function CreateTodo(title,description,dueDate,priority){

    return {title,description,dueDate,priority};
};

export const CreateProject = function(name,parent){
    const project1 = project(name);
    parent.pushProject(project1);

}
