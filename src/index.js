import "./style.css";
import { CreateDom } from "./DOM.js";
import { CreateObjProject } from "./functions.js";
import { CreateProjects } from "./functions.js";
import { CreateTodo } from "./functions.js";





const Projects = CreateObjProject();
Projects.pushProject(CreateProjects("proj1"));
Projects.pushProject(CreateProjects("proj2"));
const todo1 = CreateTodo("abc","efg","12/24","low");
console.log(Projects);

CreateDom(Projects);

