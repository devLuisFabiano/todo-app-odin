export function CreateObjProject(){

    let ProjectsArr = [];

    const pushProject = (project) => {
        ProjectsArr.push(project);
    }
   
    return {ProjectsArr, pushProject};
}

export function CreateProjects(name){
    let todoArr = []
    const pushTodo = (todo) => {
        todoArr.push(todo);
    }

    return {todoArr,name,pushTodo}
};

export function CreateTodo(title,description,dueDate,priority){

    return {title,description,dueDate,priority};
};

