import "./style.css";
import { CreateDom } from "./DOM.js";
import { CreateObjProject } from "./functions.js";
import { CreateProjects } from "./functions.js";




const Projects = CreateObjProject();
const proj = CreateProjects("proj1");
Projects.PushProject(proj);
CreateDom(Projects);

