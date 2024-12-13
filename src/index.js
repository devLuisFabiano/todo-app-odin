import "./style.css";
import { CreateDom } from "./DOM.js";
import { project } from "./functions.js";
import { CreateTodo } from "./functions.js";
import { CreateObjProjects } from "./functions.js";
const Projects = CreateObjProjects();





Projects.pushProject(project("proj1"));
Projects.pushProject(project("proj2"));
Projects.pushProject(project("proj3"));
const todo1 = CreateTodo("abc","efg","12/24","low");
console.log(Projects);

CreateDom(Projects);

