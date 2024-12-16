import { CreateProject } from "./functions";
import { CreateTodo } from "./functions";
import { CreateObjProjects } from "./functions";
import { todoa } from "./functions";
import { project } from "./functions.js";




export const CreateDom = function(){
    const Projects = CreateObjProjects();
    Projects.pushProject(project("Default"));
    const todo1 = todoa("name todo","descrption todo","12/24","low");
    Projects.ProjectsArr[Projects.ProjectsArr.length-1].pushTodo(todo1);
    console.log(Projects)
    


    const body = document.querySelector("body");

    const container = document.createElement("div");
    container.classList.add("container");

    const navBar = document.createElement("div");
    navBar.classList.add("nav-bar");

    const ul = document.createElement("ul");
    ul.classList.add("list");

    const content = document.createElement("div");
    content.classList.add("content");

    const profile = document.createElement("div");
    profile.classList.add("profile-container");

    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-todo");

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const btn = document.createElement("button");
    btn.textContent = "+";
    btn.addEventListener("click",() =>{
        CreateProject("abc",Projects);
        addProjectNav(Projects)
    })

    const btnTodo = document.createElement("button");
    btnTodo.classList.add("btn-todo");
    btnTodo.textContent = "+";
    btnTodo.addEventListener("click",() =>{
        //const dataIndex = document.querySelector("")
        CreateTodo("name todo","descrption todo","12/24","low",Projects.ProjectsArr);
    })
    
    body.appendChild(container);

    container.appendChild(navBar);
    navBar.appendChild(ul);
    ul.appendChild(btn);

    container.appendChild(content);
    content.appendChild(profile);
    content.appendChild(todoContainer);
    todoContainer.appendChild(titleDiv);
    todoContainer.appendChild(todo);
    content.appendChild(btnTodo);
    
    addProjectNav(Projects);
    RefreshContent(Projects.ProjectsArr[0]);
};

function addProjectNav(obj){
    let index = obj.ProjectsArr.length - 1;
    const list = document.querySelector("ul");
    let proj = obj.ProjectsArr[index];
    const btn = document.createElement("button");
    btn.textContent = proj.name;
    btn.setAttribute("data-index",index);
    btn.addEventListener("click", () => {
        RefreshContent(obj.ProjectsArr[btn.dataset.index]);
            
    });
    list.appendChild(btn);
    
    
};

const RefreshContent = function(project){
    const container = document.querySelector(".todo-container");
    container.remove();
    
    const content = document.querySelector(".content");

    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-todo");

    const todo = document.createElement("div");
    todo.classList.add("todo");

    titleDiv.textContent = project.name;
    project.todoArr.map((i) => {
        for(let key in i){
            let item = i[key];
            const div = document.createElement("div");
            div.textContent = item;
            todo.appendChild(div);
        }
    })

    content.appendChild(todoContainer);
    todoContainer.appendChild(titleDiv);
    todoContainer.appendChild(todo);
}