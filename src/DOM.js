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

    body.appendChild(container);
    container.appendChild(navBar);
    navBar.appendChild(ul);
    container.appendChild(content);
    content.appendChild(profile);
    content.appendChild(todoContainer);
    todoContainer.appendChild(titleDiv);
    todoContainer.appendChild(todo);

    RefreshNav(obj);
};

function RefreshNav(obj){
    obj.ProjectsArr.map((i) => {
        const btn = document.createElement("button");
        const list = document.querySelector("ul");
        btn.textContent = i.name;
        btn.setAttribute("data-index",String(obj.ProjectsArr[i]));
        btn.addEventListener("click", (e) => {
            console.log(e.target.dataset.index);
            
        });
        list.appendChild(btn);

        
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

    project.todoArr.map((i) => {
        const div = document.createElement("div");
        for (const value of Object.entries(i)){
            div.textContent += value;
        };
    });

    content.appendChild(todoContainer);
    todoContainer.appendChild(titleDiv);
    todoContainer.appendChild(todo);
}