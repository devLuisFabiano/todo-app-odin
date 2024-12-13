import { CreateProject } from "./functions";


export const CreateDom = function(obj){
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
        CreateProject("abc",obj);
        addProjectNav(obj)
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
    
    addProjectNav(obj);
    RefreshContent(obj.ProjectsArr[0]);
};

function addProjectNav(obj){
    let index = 0;
    obj.ProjectsArr.map((i) => {
        const btn = document.createElement("button");
        const list = document.querySelector("ul");
        btn.textContent = i.name;
        btn.setAttribute("data-index",index);
        btn.addEventListener("click", (e) => {
            RefreshContent(obj.ProjectsArr[btn.dataset.index]);
            
        });
        list.appendChild(btn);
        index++;

        
    });
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
    project.todoArr

    content.appendChild(todoContainer);
    todoContainer.appendChild(titleDiv);
    todoContainer.appendChild(todo);
}